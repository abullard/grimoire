[[MoC - Main]]

## README
```dataviewjs
let items = dv.pages(''); 
let tags = []

for (let tag of items.file.tags) {
	if (tags.indexOf(tag) == -1) {
		tags.push(tag)
	}
}

dv.paragraph(`Total items: ${items.length}`);

dv.list(tags)
```
