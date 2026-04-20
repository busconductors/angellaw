# Angel Law — GitHub + Firebase Deployment Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Initialize git, push to GitHub under `busconductors/angellaw` (private), configure Firebase Hosting with static export, deploy, and get a live test URL.

**Architecture:** Next.js static export (`output: 'export'`) to Firebase Hosting. Unsplash remote images need `next/image` replaced with `<img>` tags (static export doesn't support `next/image` with remote patterns). Firebase project created fresh for this site.

**Tech Stack:** Next.js 16 (static export), Firebase Hosting, GitHub (busconductors account)

---

## File Structure

```
angellaw/
├── firebase.json              (CREATE — Firebase Hosting config)
├── .firebaserc                (CREATE — Firebase project alias)
├── next.config.ts             (MODIFY — add output: 'export', unoptimized images)
├── src/app/layout.tsx         (MODIFY — metadata base URL if needed)
├── .gitignore                 (MODIFY — add Firebase cache dirs)
└── (all existing files)
```

---

### Task 1: Initialize Git Repository

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Initialize git**

```bash
cd /Users/sk_hga/lawfirmprojet/angellaw
git init
```

- [ ] **Step 2: Update .gitignore for Firebase and build artifacts**

Add to `.gitignore`:
```
# Firebase
.firebase/
firebase-debug.log

# QA artifacts (local only)
.gstack/

# Build output
out/
```

- [ ] **Step 3: Stage all files and create initial commit**

```bash
git add -A
git commit -m "feat: Angel Law site — initial commit

Next.js 16, Tailwind 4, Framer Motion.
Pages: home, services, about, contact.
Design: Classic Authority (navy/gold/cream palette)."
```

---

### Task 2: Create GitHub Repository and Push

**Files:** None (git operations only)

- [ ] **Step 1: Create private repo on GitHub under busconductors**

```bash
gh repo create busconductors/angellaw --private --source=. --remote=origin --push
```

This creates the repo, sets the remote, and pushes in one command.

- [ ] **Step 2: Verify the push succeeded**

```bash
gh repo view busconductors/angellaw --json url -q .url
git log --oneline -1
```

Expected: Shows the GitHub URL and the initial commit.

---

### Task 3: Configure Next.js for Static Export

**Files:**
- Modify: `next.config.ts`

- [ ] **Step 1: Update next.config.ts for static export**

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
```

Key changes:
- `output: 'export'` — generates static HTML/CSS/JS to `out/` directory
- `images.unoptimized: true` — required for static export (no server-side image optimization)

- [ ] **Step 2: Test the static build**

```bash
npx next build
```

Expected: Build succeeds, creates `out/` directory with static files.

- [ ] **Step 3: Verify the output directory**

```bash
ls out/
ls out/services/ out/about/ out/contact/
```

Expected: HTML files for each route.

- [ ] **Step 4: Commit the config change**

```bash
git add next.config.ts
git commit -m "chore: configure Next.js static export for Firebase Hosting"
```

---

### Task 4: Create Firebase Project

**Files:** None (Firebase CLI operations)

- [ ] **Step 1: Create a new Firebase project**

```bash
firebase projects:create angellaw-site --display-name "Angel Law"
```

If `angellaw-site` is taken, try `angellaw-bryce` or `bryceangellaw`.

- [ ] **Step 2: Verify project creation**

```bash
firebase projects:list
```

Expected: New project appears in the list.

---

### Task 5: Initialize Firebase Hosting

**Files:**
- Create: `firebase.json`
- Create: `.firebaserc`

- [ ] **Step 1: Create .firebaserc with the project alias**

```json
{
  "projects": {
    "default": "angellaw-site"
  }
}
```

(Use the actual project ID from Task 4.)

- [ ] **Step 2: Create firebase.json**

```json
{
  "hosting": {
    "public": "out",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(jpg|jpeg|gif|png|svg|webp|ico)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000, immutable"
          }
        ]
      },
      {
        "source": "**/*.@(js|css)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000, immutable"
          }
        ]
      }
    ]
  }
}
```

Key config:
- `public: "out"` — serves the Next.js static export output
- Rewrites route all paths to index.html for client-side routing
- Cache headers for static assets (images, JS, CSS)

- [ ] **Step 3: Commit Firebase config**

```bash
git add firebase.json .firebaserc .gitignore
git commit -m "chore: add Firebase Hosting configuration"
```

---

### Task 6: Build and Deploy

**Files:** None (build + deploy operations)

- [ ] **Step 1: Run the production build**

```bash
npx next build
```

Expected: Static export completes, `out/` directory populated.

- [ ] **Step 2: Deploy to Firebase Hosting**

```bash
firebase deploy --only hosting
```

Expected: Deploy succeeds, prints the live URL like:
```
✔ Deploy complete!
Hosting URL: https://angellaw-site.web.app
```

- [ ] **Step 3: Verify the live site**

Open the Hosting URL in the browser and verify:
- Homepage loads with hero, stat bar, about, services, CTA
- Navigation between pages works
- Images load (Unsplash remote images)
- Mobile responsive
- No console errors

- [ ] **Step 4: Push all changes to GitHub**

```bash
git push origin main
```

---

### Task 7: Verify and Report

- [ ] **Step 1: Confirm GitHub repo**

```bash
gh repo view busconductors/angellaw --web
```

- [ ] **Step 2: Record the test URL**

Save the Firebase Hosting URL for sharing. Format:
```
GitHub: https://github.com/busconductors/angellaw (private)
Test URL: https://angellaw-site.web.app
```

---

## Post-Deploy Checklist

After deployment, these are the remaining items from QA:

- [ ] Add real social media URLs (LinkedIn, Twitter/X) — currently placeholder `#`
- [ ] Connect contact form to backend (email service or Firebase Functions)
- [ ] Set up custom domain when ready (Firebase Hosting supports custom domains)
- [ ] Consider adding Firebase Analytics for traffic tracking
