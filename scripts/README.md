# Content Acquisition Pipeline

This directory contains tools to download and clean educational content from [formation-civique.interieur.gouv.fr](https://formation-civique.interieur.gouv.fr).

## 🎯 Two-Step Process

### Step 1: Crawl (Download)
Download all content from the official site

### Step 2: Clean (Extract)
Extract clean, structured data from the downloaded HTML

---

## 📥 Step 1: Crawl Content

Download educational content and official question lists.

### Crawl Educational Content

```bash
npm run crawl:all
```

**What it does:**
- Downloads all thematic educational content (fiches)
- Automatically handles multiple layers of pages
- Respectful: 2-5 second delays between requests
- Smart: Reuses already-downloaded pages
- Resume-capable: Can continue from where it left off

**Output:** `scripts/data/themes/` (raw HTML files)

### Download Question Lists

Manually save these pages from your browser:
1. [Questions CR](https://formation-civique.interieur.gouv.fr/examen-civique/liste-officielle-des-questions-de-connaissance-cr/)
   - Save as `scripts/data/questions-cr.html`
2. [Questions CSP](https://formation-civique.interieur.gouv.fr/examen-civique/liste-officielle-des-questions-de-connaissance-csp/)
   - Save as `scripts/data/questions-csp.html`

**Why manually?** The site blocks automated downloads of question pages.

---

## 🧹 Step 2: Clean Data

Extract clean, structured data from all downloaded HTML.

### Clean All Content

```bash
npm run clean:all
```

This runs both cleaners below.

### Clean Educational Content

```bash
npm run clean:content
```

**What it does:**
- Reads all HTML from `scripts/data/themes/`
- Extracts clean text, sections, and structure
- Removes navigation, menus, headers, footers
- Outputs JSON (for programs) and Markdown (for humans)
- Creates searchable index of all content

**Output:** `scripts/data/clean/`
- Each page as `.json` and `.md`
- `_index.json` - Full content index
- `_index.md` - Readable table of contents

### Clean Questions

```bash
npm run clean:questions
```

**What it does:**
- Reads question HTML files from `scripts/data/`
- Extracts all questions and their 4 options
- Creates template files for manual answer completion
- Note: Official lists don't include answers!

**Output:** `scripts/data/clean/questions/`
- `cr.json` - CR questions (structured)
- `cr-template.txt` - Template for answers
- `csp.json` - CSP questions (structured)
- `csp-template.txt` - Template for answers
- `_index.json` - Questions index

---

## 📊 What You Get

After running both steps:

### Educational Content
```
scripts/data/clean/
├── _index.json                      # Master index
├── _index.md                        # Readable TOC
├── droits-et-devoirs/
│   ├── droits-fondamentaux/
│   │   ├── content.json            # Clean data
│   │   └── content.md              # Readable
│   └── obligations-et-devoirs/
│       ├── content.json
│       └── content.md
└── ...more themes...
```

### Questions
```
scripts/data/clean/questions/
├── _index.json
├── _README.md
├── cr.json                         # All CR questions
├── cr-template.txt                 # Fill in answers here
├── csp.json                        # All CSP questions
└── csp-template.txt                # Fill in answers here
```

---

## 🔧 Quick Reference

| Command | Purpose |
|---------|---------|
| `npm run crawl:all` | Download all educational content |
| `npm run clean:all` | Extract clean data from everything |
| `npm run clean:content` | Clean educational content only |
| `npm run clean:questions` | Clean questions only |

---

## 📁 Directory Structure

```
scripts/
├── README.md                       # This file
├── crawlAll.ts                    # Crawler (smart, multi-layer)
├── cleanContent.ts                 # Content cleaner
├── cleanQuestions.ts               # Questions cleaner
└── data/
    ├── questions-cr.html          # Manual download
    ├── questions-csp.html         # Manual download
    ├── themes/                    # Raw crawled HTML
    │   └── ...                    # (organized by theme)
    └── clean/                     # Clean extracted data
        ├── _index.json            # Content index
        ├── _index.md              # Readable TOC
        ├── droits-et-devoirs/     # Clean content
        ├── histoire-geographie/
        ├── ...
        └── questions/             # Clean questions
            ├── cr.json
            ├── csp.json
            └── *-template.txt
```

---

## ⚖️ Ethical Usage

**Respectful Crawling:**
- Automated crawler uses 2-5 second delays
- Smart caching prevents re-requesting
- Proper User-Agent identification
- Can be manually stopped and resumed

**Educational Purpose:**
- Content is publicly available
- Used to help people study
- Free alternative to paid services
- Credit given to official source

---

## 🚀 Getting Started

1. **First time setup:**
   ```bash
   npm install
   ```

2. **Download content:**
   ```bash
   npm run crawl:all
   ```
   Then manually save the two question list pages.

3. **Clean the data:**
   ```bash
   npm run clean:all
   ```

4. **Review the output:**
   - Check `scripts/data/clean/_index.md` for content overview
   - Check `scripts/data/clean/questions/_README.md` for next steps

---

## 💡 What's Next?

After you have clean data:

1. **For Questions:**
   - Fill in correct answers in `*-template.txt` files
   - Use the clean educational content to find answers
   - Import into the app (future step)

2. **For Content:**
   - Use as reference material
   - Create additional questions
   - Add to the study platform (future step)

---

## 🐛 Troubleshooting

**Crawler gets 403 error:**
- The site may be blocking requests
- Solution: Manually save pages from browser instead

**No questions extracted:**
- Check that HTML files are in `scripts/data/`
- File names must contain "cr" or "csp"
- Review the HTML structure in the saved files

**Content looks messy:**
- This is normal for automatic extraction
- Review the `.md` files for readability
- The `.json` files have the structured data

---

## 📝 Notes

- All data is saved locally
- No database required
- Can be run multiple times safely
- Progress is saved between runs
- Old scripts kept in repo but not documented here
