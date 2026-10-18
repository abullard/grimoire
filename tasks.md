# [[table of contents|← Parent]]

# Specs — open `#todo` count

```dataview
TABLE length(filter(file.tasks, (t) => !t.completed AND contains(t.tags, "#todo"))) AS "Open #todo"
FROM "artifacts/design-docs/specs"
```

# Open `#todo`

```tasks
path includes artifacts/design-docs/specs
tags include #todo
not done
group by filename
hide backlink
```
