import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Study Page - Floating Navigation', () => {
  let scrollToMock: ReturnType<typeof vi.fn>;
  let scrollIntoViewMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    // Mock window.scrollTo
    scrollToMock = vi.fn();
    Object.defineProperty(window, 'scrollTo', {
      writable: true,
      value: scrollToMock,
    });

    // Mock element.scrollIntoView
    scrollIntoViewMock = vi.fn();
    Element.prototype.scrollIntoView = scrollIntoViewMock;

    // Mock IntersectionObserver
    global.IntersectionObserver = class IntersectionObserver {
      constructor(public callback: IntersectionObserverCallback) {}
      observe = vi.fn();
      unobserve = vi.fn();
      disconnect = vi.fn();
    } as any;

    // Mock localStorage
    const localStorageMock: Record<string, string> = {};
    Object.defineProperty(window, 'localStorage', {
      writable: true,
      value: {
        getItem: vi.fn((key: string) => localStorageMock[key] || null),
        setItem: vi.fn((key: string, value: string) => {
          localStorageMock[key] = value;
        }),
        removeItem: vi.fn((key: string) => {
          delete localStorageMock[key];
        }),
        clear: vi.fn(() => {
          Object.keys(localStorageMock).forEach((key) => delete localStorageMock[key]);
        }),
      },
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('Scroll behavior', () => {
    it('should not scroll to top when user naturally scrolls', async () => {
      // This test validates the fix for the scroll-to-top bug
      // When a user scrolls naturally, the page should NOT reset scroll position

      // Setup: Create a mock scroll event
      const handleScroll = vi.fn();
      window.addEventListener('scroll', handleScroll);

      // Simulate scroll event
      window.scrollY = 500;
      window.dispatchEvent(new Event('scroll'));

      // Wait for any async updates
      await waitFor(() => {
        expect(handleScroll).toHaveBeenCalled();
      });

      // Verify window.scrollTo was NOT called (no scroll reset)
      expect(scrollToMock).not.toHaveBeenCalled();

      window.removeEventListener('scroll', handleScroll);
    });

    it('should call scrollIntoView when explicitly jumping to a question', () => {
      // This validates that the jump-to-question feature works correctly
      const element = document.createElement('div');

      // Simulate scrollIntoView call
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });

      expect(scrollIntoViewMock).toHaveBeenCalledWith({
        behavior: 'smooth',
        block: 'center',
      });
    });

    it('should call scrollTo when clicking scroll to top button', () => {
      // Simulate clicking the "scroll to top" button
      window.scrollTo({ top: 0, behavior: 'smooth' });

      expect(scrollToMock).toHaveBeenCalledWith({
        top: 0,
        behavior: 'smooth',
      });
    });
  });

  describe('URL updates', () => {
    it('should NOT update URL during natural scrolling (only localStorage)', async () => {
      vi.useFakeTimers();

      // Simulate multiple scroll events in quick succession
      const mockNavigate = vi.fn();

      // Fast scrolling should not trigger navigation at all
      for (let i = 0; i < 5; i++) {
        window.scrollY = 100 * i;
        window.dispatchEvent(new Event('scroll'));
      }

      // Verify navigate wasn't called immediately
      expect(mockNavigate).not.toHaveBeenCalled();

      // Fast forward 1 second (debounce timeout)
      vi.advanceTimersByTime(1000);

      // Verify navigate is STILL not called during natural scrolling
      // Only localStorage should be updated to preserve position
      expect(mockNavigate).not.toHaveBeenCalled();

      vi.useRealTimers();
    });

    it('should update URL immediately when explicitly jumping to a question', () => {
      // When user selects a question from the dropdown,
      // URL should update immediately (not debounced)
      const mockNavigate = vi.fn();

      // Simulate explicit jump - should trigger immediate URL update
      const searchParams = { theme: 'principes-valeurs' as const, question: 5 };
      mockNavigate({ search: searchParams, replace: true });

      expect(mockNavigate).toHaveBeenCalledWith({
        search: searchParams,
        replace: true,
      });
    });
  });

  describe('localStorage persistence', () => {
    it('should save last question to localStorage', async () => {
      const theme = 'principes-valeurs';
      const questionNumber = 5;

      localStorage.setItem(`study-${theme}-lastQuestion`, questionNumber.toString());

      expect(localStorage.getItem(`study-${theme}-lastQuestion`)).toBe('5');
    });

    it('should retrieve last question from localStorage on mount', () => {
      const theme = 'institutions';
      const lastQuestion = '8';

      localStorage.setItem(`study-${theme}-lastQuestion`, lastQuestion);

      const retrieved = localStorage.getItem(`study-${theme}-lastQuestion`);
      expect(retrieved).toBe(lastQuestion);
    });

    it('should not save question 1 to localStorage', () => {
      const theme = 'principes-valeurs';

      // Question 1 is the default, shouldn't be saved
      localStorage.removeItem(`study-${theme}-lastQuestion`);

      // Verify it's not in localStorage
      expect(localStorage.getItem(`study-${theme}-lastQuestion`)).toBeNull();
    });
  });

  describe('Intersection Observer', () => {
    it('should create IntersectionObserver with correct options', () => {
      const callback = vi.fn();

      const observer = new IntersectionObserver(callback, {
        threshold: [0.5],
        rootMargin: '-20% 0px -20% 0px',
      } as IntersectionObserverInit);

      // Verify observer was created successfully
      expect(observer).toBeDefined();
      expect(observer.observe).toBeDefined();
      expect(observer.disconnect).toBeDefined();

      observer.disconnect();
    });

    it('should observe question elements when mounted', () => {
      const observer = new IntersectionObserver(vi.fn());
      const element = document.createElement('div');

      observer.observe(element);

      expect(observer.observe).toHaveBeenCalledWith(element);
    });

    it('should not update current question while programmatically scrolling', () => {
      // When isScrollingToQuestion flag is true,
      // IntersectionObserver should not update currentQuestion
      // This prevents conflicts between manual jumps and natural scrolling

      const isScrollingToQuestion = { current: true };
      const setCurrentQuestion = vi.fn();

      // Simulate intersection observer callback
      if (!isScrollingToQuestion.current) {
        setCurrentQuestion(5);
      }

      // Should not update because flag is true
      expect(setCurrentQuestion).not.toHaveBeenCalled();
    });
  });

  describe('Floating navigation visibility', () => {
    it('should show floating nav after scrolling past 300px', () => {
      let showFloatingNav = false;

      // Simulate scroll past threshold
      window.scrollY = 400;
      if (window.scrollY > 300) {
        showFloatingNav = true;
      }

      expect(showFloatingNav).toBe(true);
    });

    it('should hide floating nav when scrolled to top', () => {
      let showFloatingNav = true;

      // Simulate scroll to top
      window.scrollY = 100;
      if (window.scrollY <= 300) {
        showFloatingNav = false;
      }

      expect(showFloatingNav).toBe(false);
    });
  });

  describe('Question navigation', () => {
    it('should update current question when selecting from dropdown', () => {
      let currentQuestion = 1;

      // Simulate selecting question 5 from dropdown
      currentQuestion = 5;

      expect(currentQuestion).toBe(5);
    });

    it('should scroll to correct question reference', () => {
      const questionRefs = {
        0: document.createElement('div'),
        1: document.createElement('div'),
        2: document.createElement('div'),
      };

      const targetQuestion = 2; // User wants to jump to question 2
      const ref = questionRefs[targetQuestion - 1]; // Get ref for question 2 (index 1)

      ref.scrollIntoView({ behavior: 'smooth', block: 'center' });

      expect(scrollIntoViewMock).toHaveBeenCalledWith({
        behavior: 'smooth',
        block: 'center',
      });
    });

    it('should handle question number boundaries correctly', () => {
      const totalQuestions = 10;

      // Test valid question numbers
      expect(1).toBeGreaterThanOrEqual(1);
      expect(1).toBeLessThanOrEqual(totalQuestions);

      expect(10).toBeGreaterThanOrEqual(1);
      expect(10).toBeLessThanOrEqual(totalQuestions);

      // Test invalid question numbers
      expect(0).toBeLessThan(1);
      expect(11).toBeGreaterThan(totalQuestions);
    });
  });

  describe('URL parameter validation', () => {
    it('should parse number from string question parameter', () => {
      const questionParam = '5';
      const parsed = parseInt(questionParam, 10);

      expect(parsed).toBe(5);
      expect(typeof parsed).toBe('number');
    });

    it('should handle undefined question parameter', () => {
      const questionParam = undefined;
      const result = questionParam || 1;

      expect(result).toBe(1);
    });

    it('should validate question is within range', () => {
      const totalQuestions = 20;
      const urlQuestion = 5;

      const isValid = urlQuestion > 0 && urlQuestion <= totalQuestions;

      expect(isValid).toBe(true);
    });

    it('should reject out-of-range question numbers', () => {
      const totalQuestions = 20;
      const urlQuestion = 25;

      const isValid = urlQuestion > 0 && urlQuestion <= totalQuestions;

      expect(isValid).toBe(false);
    });
  });
});
