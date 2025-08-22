#masterkey

![[master-key.png]]

```dataview
LIST 
FROM #masterkey 

// hide unwanted files
WHERE !regexmatch("Masterkey Template", file.name)
WHERE !regexmatch("MoC - Masterkey", file.name)
```
