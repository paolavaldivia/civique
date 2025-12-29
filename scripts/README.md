# Question Import Tools

This directory contains tools to import official civic education questions into the app.

## 🎯 Overview

There are two official question lists from [formation-civique.interieur.gouv.fr](https://formation-civique.interieur.gouv.fr):

1. **CR (Connaissance Réfugiés)** - Questions for refugees
2. **CSP (Connaissance Statut Personnel)** - Questions for personal status

We provide multiple methods to import these questions respectfully:

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

- `npm run parse:html` - Parse HTML files from `scripts/data/*.html`
- `npm run parse:manual` - Parse text file from `scripts/data/manual-questions.txt`
- `npm run merge:questions` - Merge all JSON files from `scripts/output/` into the app

## 📁 Directory Structure

```
scripts/
├── README.md                    # This file
├── parseQuestions.ts            # HTML parser
├── manualImport.ts              # Text format parser
├── mergeQuestions.ts            # Merge tool
├── data/                        # Put your input files here
│   ├── manual-questions.txt     # Text format questions
│   ├── questions-cr.html        # Saved HTML (optional)
│   └── questions-csp.html       # Saved HTML (optional)
└── output/                      # Generated JSON files
    ├── manual-questions.json    # Parsed questions
    └── parsed-questions.json    # More parsed questions
```

## ⚖️ Ethical Usage

These tools are designed to:

- ✅ Respect the source website (no automated scraping)
- ✅ Use publicly available educational content
- ✅ Help people study for the civic education test
- ✅ Provide a free alternative to paid services

Always:

- Manually download content (don't spam the server)
- Give credit to the official source
- Use the content for educational purposes only

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
