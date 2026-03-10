# Git Merge Conflict — Demo & Resolution Guide

This repo contains an **intentional merge conflict** for learning. Use it to practice resolving conflicts.

## What Happened?

Two branches changed the **same line** in `facebook-login.html`:

- **develop** (HEAD): `Discover communities and stay connected on Facebook.`
- **feature/update-tagline**: `Share your life with friends and family on Facebook.`

Git cannot choose automatically, so it marks the conflict for you to resolve.

---

## Understanding Conflict Markers

In `facebook-login.html` you'll see:

```
<<<<<<< HEAD
      <p class="tagline">Discover communities and stay connected on Facebook.</p>
=======
      <p class="tagline">Share your life with friends and family on Facebook.</p>
>>>>>>> feature/update-tagline
```

| Marker | Meaning |
|--------|---------|
| `<<<<<<< HEAD` | Start of **your current branch** (develop) |
| `=======` | Separator between the two versions |
| `>>>>>>> feature/update-tagline` | End of **incoming branch** (feature) |

---

## How to Resolve the Conflict

### Option 1: Keep one version

**Keep develop's version:**
```html
<p class="tagline">Discover communities and stay connected on Facebook.</p>
```

**Or keep feature's version:**
```html
<p class="tagline">Share your life with friends and family on Facebook.</p>
```

### Option 2: Combine both ideas

```html
<p class="tagline">Share your life and discover communities on Facebook.</p>
```

### Option 3: Write something new

Replace the whole block with your own tagline.

---

## Steps to Complete the Resolution

1. **Open** `facebook-login.html` in your editor.

2. **Remove the conflict markers** (`<<<<<<<`, `=======`, `>>>>>>>`) and the version you don't want, leaving only the final content.

3. **Stage** the resolved file:
   ```bash
   git add facebook-login.html
   ```

4. **Verify** status:
   ```bash
   git status
   ```

5. **Complete the merge**:
   ```bash
   git commit -m "Resolve merge conflict: update tagline"
   ```

---

## Useful Commands

| Action | Command |
|--------|---------|
| Abort merge (undo) | `git merge --abort` |
| See conflicted files | `git status` |
| See diff of conflicts | `git diff` |

---

## Branch Setup (For Instructors)

To recreate this scenario:

```bash
git checkout develop
git checkout -b feature/update-tagline
# Edit facebook-login.html tagline → commit
git checkout develop
# Edit same line differently → commit
git merge feature/update-tagline   # Conflict!
```
