# CI/CD Setup Guide

This repository is configured with GitHub Actions for Continuous Integration (CI) and Continuous Deployment (CD).

## Workflows

### 1. CI Workflow (`.github/workflows/ci.yml`)
**Triggers:** Pull requests and pushes to non-main branches

**Steps:**
1. ✓ Checkout code
2. ✓ Install dependencies
3. ✓ Run TypeScript type checking
4. ✓ Run tests (vitest)
5. ✓ Build application

**Purpose:** Validates that PRs are safe to merge by ensuring code builds, type checks pass, and tests succeed.

### 2. Deploy Workflow (`.github/workflows/deploy.yml`)
**Triggers:** Pushes to `main` branch (after PR merge)

**Steps:**
1. ✓ Checkout code
2. ✓ Install dependencies
3. ✓ Run TypeScript type checking
4. ✓ Run tests (vitest)
5. ✓ Build application
6. ✓ Deploy to Cloudflare using Wrangler

**Purpose:** Automatically deploys your application to Cloudflare after merging to main.

## Required Secrets

To enable automatic deployments, you need to add these secrets to your GitHub repository:

### 1. `CLOUDFLARE_API_TOKEN`
- Go to [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens)
- Click "Create Token"
- Use the "Edit Cloudflare Workers" template
- Copy the token

### 2. `CLOUDFLARE_ACCOUNT_ID`
- Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
- Select Workers & Pages
- Copy your Account ID from the right sidebar

### Adding Secrets to GitHub:
1. Go to your repository on GitHub
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add both `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`

## Testing

### Running Tests Locally
```bash
# Run tests once
npm test

# Run tests in watch mode (interactive)
npm run test:watch
```

### Test Framework
- **Vitest** - Fast unit test framework
- **Testing Library** - React component testing utilities
- **jsdom** - Browser environment simulation

### Writing Tests
Create test files next to your components with `.test.tsx` extension:

```
app/
  components/
    ui/
      Button.tsx
      Button.test.tsx  ← Test file
```

See `app/components/ui/Button.test.tsx` for an example.

## Deployment Flow

```
Developer creates PR
    ↓
CI runs (type check, tests, build)
    ↓
Review & approval
    ↓
Merge to main
    ↓
Deploy workflow runs automatically
    ↓
App deployed to Cloudflare 🚀
```

## Best Practices

1. **Always create PRs** - Don't push directly to main
2. **Wait for CI** - Ensure CI passes before merging
3. **Review deploy logs** - Check Actions tab for deployment status
4. **Write tests** - Add tests for new features and bug fixes
5. **Keep main stable** - Main branch should always be deployable

## Troubleshooting

### Tests failing in CI but passing locally?
- Ensure you've committed all files including test setup
- Check Node.js version matches (v20 in CI)

### Deployment failing?
- Verify Cloudflare secrets are correctly set
- Check API token has correct permissions
- Review Wrangler configuration in `wrangler.jsonc`

### Build failing?
- Run `npm run build` locally to reproduce
- Check TypeScript errors with `npx tsc --noEmit`
- Ensure all dependencies are in `package.json`

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run tests
npm test

# Type check
npx tsc --noEmit

# Build for production
npm run build

# Deploy manually
npm run deploy
```

## Next Steps

1. ✅ Add Cloudflare secrets to GitHub
2. ✅ Create your first PR to test CI workflow
3. ✅ Merge to main to test CD workflow
4. ✅ Write more tests for your components
5. ✅ Consider adding test coverage reports
6. ✅ Set up branch protection rules (require CI to pass)
