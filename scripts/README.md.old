# Question Import Tools

This directory contains tools to import official civic education questions into the app.

## 🎯 Overview

There are two official question lists from [formation-civique.interieur.gouv.fr](https://formation-civique.interieur.gouv.fr):

1. **CR (Connaissance Réfugiés)** - Questions for refugees
2. **CSP (Connaissance Statut Personnel)** - Questions for personal status

Additionally, there is educational content (fiches thématiques) that can be used to:
- Find answers to the official questions
- Create additional custom questions
- Provide explanations

We provide multiple methods to import these questions respectfully:

---

## 🚀 NEW: Recommended Workflow (With Educational Content)

### Overview
Since the official question lists don't include answers, we can use the thematic educational content to help fill them in.

### Step 1: Crawl Educational Content

The thematic pages contain detailed information about French civic knowledge.

```bash
npm run crawl:themes
```

This will:
- Respectfully crawl the fiches thématiques (2-5 second delays)
- Save content as HTML, JSON, and Markdown
- Create a searchable knowledge base
- Output to `scripts/data/themes/`

**Note:** If you get a 403 error, manually save the pages from your browser instead.

### Step 2: Parse Question HTML

If you have the HTML files of the question lists:

```bash
npm run parse:questions-html
```

This will:
- Extract all questions and options from the HTML
- Generate a template file for you to fill in answers
- Output to `scripts/output/questions-{cr|csp}-to-complete.txt`

### Step 3: Complete the Answers

Open the generated `.txt` files and:
1. Review each question
2. Search the crawled thematic content for answers
3. Fill in `CORRECT: A/B/C/D` for each question
4. Optionally add explanations

### Step 4: Import Completed Questions

```bash
npm run parse:manual
npm run merge:questions
```

### Step 5: Done!

Your questions with correct answers are now in the app.

---

## 📋 Method 1: Manual Text Format (Recommended)

This is the simplest method - just copy-paste questions into a text file.

### Step 1: Create the input file

Create `scripts/data/manual-questions.txt` with this format:

```
Q1: [CR] Quelle est la devise de la République française ?
A) Travail, Famille, Patrie
B) Liberté, Égalité, Fraternité
C) Honneur et Patrie
D) Unité et Indivisibilité
CORRECT: B

Q2: [CSP] Qui est le chef de l'État en France ?
A) Le Premier ministre
B) Le Président de la République
C) Le Président du Sénat
D) Le Président de l'Assemblée nationale
CORRECT: B
```

### Step 2: Parse the questions

```bash
npm run parse:manual
```

This will create `scripts/output/manual-questions.json`

### Step 3: Merge into the app

```bash
npm run merge:questions
```

Done! The questions are now in `app/data/questions.ts`

## 📄 Method 2: HTML Parsing

If you've saved the HTML pages from the official site.

### Step 1: Save the HTML pages

1. Visit [Questions CR](https://formation-civique.interieur.gouv.fr/examen-civique/liste-officielle-des-questions-de-connaissance-cr/)
2. Right-click → "Save As" → "Webpage, Complete"
3. Save as `scripts/data/questions-cr.html`
4. Repeat for [Questions CSP](https://formation-civique.interieur.gouv.fr/examen-civique/liste-officielle-des-questions-de-connaissance-csp/)
5. Save as `scripts/data/questions-csp.html`

### Step 2: Inspect and customize the parser

Open `scripts/parseQuestions.ts` and look at the `parseHTMLFile` function. You'll need to customize it based on the actual HTML structure. Look for:

- How questions are wrapped (div, section, etc.)
- How options are listed (ol, ul, etc.)
- How correct answers are marked

### Step 3: Run the parser

```bash
npm run parse:html
```

### Step 4: Merge into the app

```bash
npm run merge:questions
```

## 🔍 How It Works

### Theme Detection

Questions are automatically categorized into themes based on keywords:

- **principes-valeurs**: devise, laïcité, égalité, liberté, fraternité
- **institutions**: président, ministre, assemblée, sénat, constitution
- **symboles**: drapeau, hymne, marseillaise, marianne
- **histoire**: révolution, république, guerre, dates
- **geographie**: capitale, région, département, océan
- **culture**: artiste, écrivain, peintre, littérature, musée
- **vie-quotidienne**: (default for everything else)

### Duplicate Detection

The merge script detects duplicates by comparing normalized question text (lowercased, stripped of special characters). Duplicates are automatically skipped.

### Backup

Before merging, your original `questions.ts` is backed up to `questions.ts.backup`

## 📊 Statistics

After running the scripts, you'll see:

- Total questions imported
- Questions by source (CR, CSP, custom)
- Questions by theme
- Duplicates skipped

## 🚀 Quick Start (TL;DR)

For the **fastest** method:

```bash
# 1. Create scripts/data/manual-questions.txt with your questions
# 2. Run:
npm run parse:manual && npm run merge:questions
```

## 🔧 Scripts Reference

### Content Crawling
- `npm run crawl:themes` - Crawl educational content from fiches thématiques (respectful, with delays)

### Question Parsing
- `npm run parse:questions-html` - Parse official question list HTML (extracts questions without answers)
- `npm run parse:html` - Parse HTML files from `scripts/data/*.html` (legacy, for custom parsing)
- `npm run parse:manual` - Parse text file from `scripts/data/manual-questions.txt`

### Merging
- `npm run merge:questions` - Merge all JSON files from `scripts/output/` into the app

## 📁 Directory Structure

```
scripts/
├── README.md                         # This file
├── crawlThemes.ts                    # Educational content crawler
├── parseQuestionHTML.ts              # Official question list parser
├── parseQuestions.ts                 # Legacy HTML parser
├── manualImport.ts                   # Text format parser
├── mergeQuestions.ts                 # Merge tool
├── data/                             # Put your input files here
│   ├── manual-questions.txt          # Text format questions
│   ├── questions-cr.html             # Saved question list HTML
│   ├── questions-csp.html            # Saved question list HTML
│   └── themes/                       # Crawled educational content
│       ├── _summary.json             # Crawl summary
│       ├── theme-slug-1/
│       │   ├── full.html             # Full HTML
│       │   ├── content.json          # Structured data
│       │   └── content.md            # Readable markdown
│       └── theme-slug-2/
│           └── ...
└── output/                           # Generated JSON files
    ├── manual-questions.json         # Parsed questions
    ├── questions-cr-incomplete.json  # Questions without answers
    └── questions-csp-to-complete.txt # Template for completing
```

## ⚖️ Ethical Usage

These tools are designed to:

- ✅ Respect the source website (2-5 second delays between requests)
- ✅ Use publicly available educational content
- ✅ Help people study for the civic education test
- ✅ Provide a free alternative to paid services
- ✅ Can resume from where it left off (no duplicate requests)
- ✅ Include proper User-Agent header

Always:

- Use the crawler responsibly (it has built-in delays)
- Alternatively, manually download content from your browser
- Give credit to the official source
- Use the content for educational purposes only
- Don't run the crawler repeatedly (content is saved locally)

## 🐛 Troubleshooting

**"No questions found"**
- Check the format of your text file
- Ensure each question has exactly 4 options (A, B, C, D)
- Ensure there's a CORRECT line

**"Could not parse HTML"**
- The HTML structure might have changed
- You need to customize the parser in `parseQuestions.ts`
- Consider using the manual text method instead

**"Duplicates skipped"**
- This is normal! It means those questions already exist
- Check the statistics to see how many new questions were added

## 🎓 Question Format

Each question in the app has:

```typescript
{
  id: string;              // Unique ID (e.g., "cr-1")
  question: string;        // The question text
  options: string[];       // 4 options
  correctAnswer: number;   // Index 0-3
  theme: Theme;            // Auto-detected theme
  source: 'CR' | 'CSP' | 'custom';  // Question source
  officialId?: string;     // Official question number
  explanation?: string;    // Optional explanation (add manually)
}
```

## 📝 Next Steps

After importing questions:

1. Review the questions in `app/data/questions.ts`
2. Add explanations to questions (optional but helpful for learning)
3. Test the questions in the app
4. Adjust theme categorization if needed

## 💡 Tips

- Start small: Import 10-20 questions first to test the process
- Review the parsed output before merging
- Keep backups of your manually-created questions
- You can run the merge script multiple times safely (it won't create duplicates)
