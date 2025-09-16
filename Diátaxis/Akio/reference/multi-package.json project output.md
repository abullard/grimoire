#npm #pnpm #yarn #package-manager #personal-project #diataxis/akio/reference
$ pnpm akio build
pnpm-akio
---------
Found scripts matching: "build"

📦 server
  NaN) build — build the production server
  NaN) build:devl — build the dev server

📦 client
  3. build — build the production client
  4. build:devl — build the dev client

How to non-recursively/non-iteratively find all package.jsons in an open folder/repo

---

> [!quote] Prompt
> Hoping this thread gives you the proper context, it's been quiet a while since this was touched. 
> 
> I'm looking at the UX of this CLI tool to now surface monorepo scripts+descriptions. 
> 
> SO, my question is: What's a good CLI "above the fold" UX for multiple packages that have 30 plus commands? pick a package first, then a command? "pipe to less" so we only show a page of commands at a time? 
> 
> Allow people to specify the package in the beginning? i.e. `akio api build`?

You’re hitting the classic **monorepo scale problem**: once the number of scripts balloons, a “flat list” turns into noise. The UX question is: how do you give people **context first**, then **choice**, without overwhelming them? A few patterns you could combine:

---

### 1. Package-first drilldown (interactive default)

If someone just runs `akio`, default to **choose-a-package → choose-a-script**. That way the first thing above the fold is:

```
? Which package do you want?
  1. api
  2. web
  3. worker
  4. shared
```

Then show the scripts for that package only. Keeps the noise down.

---

### 2. Direct addressing (skip the menu)

For power users, allow:

```bash
akio api build
akio web test:unit
```

That way you don’t _have_ to go through menus if you already know the package. You’re not breaking discoverability for newcomers, but you keep speed for veterans.

---

### 3. Paged list (for the long tail)

If a package has 30+ commands, auto-pipe to a pager (like `less` or `fzf`-style fuzzy search):

```bash
akio api
```

→ opens a scrollable/paged list where you can arrow/search quickly.

---

### 4. Search across all packages (the “superpower”)

If they don’t remember which package a script belongs to:

```bash
akio test
```

returns grouped results:

```
api:
  test         — run unit tests
  test:int     — integration tests

web:
  test:e2e     — browser tests
```

This is especially nice for big repos, because “where’s that script again?” is the common pain.

---

### TL;DR recommendation

- **Default**: choose package → choose script (interactive).
- **Direct CLI**: `akio <package> <script>` for power users.
- **Search**: global search across packages when given a bare keyword.
- **Paging/fuzzy search**: when a package has > ~15 scripts, avoid dumping them all.

That way: newcomers aren’t overwhelmed, veterans don’t feel slowed down, and everyone has an “escape hatch” when there are 200+ scripts floating around.

---

Want me to sketch a mock CLI flow for what a **30+ script monorepo session** would feel like, start to finish?