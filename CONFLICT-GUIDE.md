# Git Merge Conflict — Demo & Resolution Guide

This repo contains an **intentional merge conflict** for learning. Use it to practice resolving conflicts.

## What Happened?

Two branches changed the **same 4–5 lines** (the form section) in `facebook-login.html`:

- **develop** (HEAD): Username/email placeholders, hint text, "Log In" button
- **feature/form-updates**: Phone/email placeholders, "Remember me" checkbox, "Sign In" button

Git cannot choose automatically, so it marks the conflict for you to resolve.

---

## Understanding Conflict Markers

In `facebook-login.html` you'll see a **multi-line conflict**:

```
<<<<<<< HEAD
        <input type="text" id="email" placeholder="Username or email" autocomplete="username">
        <input type="password" id="password" placeholder="Enter your password" autocomplete="current-password">
        <p class="form-hint">Enter your credentials to continue</p>
        <button type="submit" class="btn-login">Log In</button>
=======
        <input type="text" id="email" placeholder="Phone or email" autocomplete="username">
        <input type="password" id="password" placeholder="Enter password" autocomplete="current-password">
        <label><input type="checkbox" name="remember"> Remember me</label>
        <button type="submit" class="btn-login">Sign In</button>
>>>>>>> feature/form-updates
```

| Marker | Meaning |
|--------|---------|
| `<<<<<<< HEAD` | Start of **your current branch** (develop) |
| `=======` | Separator between the two versions |
| `>>>>>>> feature/form-updates` | End of **incoming branch** (feature) |

---

## How to Resolve the Conflict

### Option 1: Keep one version

Keep either the full HEAD block or the full feature block, and remove the other plus all conflict markers.

### Option 2: Combine both ideas

Merge the best of both, e.g.:

```html
        <input type="text" id="email" placeholder="Phone or email" autocomplete="username">
        <input type="password" id="password" placeholder="Enter your password" autocomplete="current-password">
        <label><input type="checkbox" name="remember"> Remember me</label>
        <p class="form-hint">Enter your credentials to continue</p>
        <button type="submit" class="btn-login">Log In</button>
```

### Option 3: Write your own version

Replace the whole block with your own form fields and labels.

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
