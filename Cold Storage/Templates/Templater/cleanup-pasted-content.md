- [ ] #todo: fix this up later. [link to docs](https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html#tpfilepathrelative-boolean--false).

<%*
const content = tp.file.content;

console.log(content)

// Regex cleanup operations
let cleaned = content
  .replace(/\n{3,}/g, '\n\n') // collapse multiple blank lines
  .replace(/[ \t]+$/gm, '') // trim trailing spaces
  .replace(/^\s*[-*+]\s+/gm, '- ') // normalize bullet points
  .replace(/^\s*\d+\.\s+/gm, '1. ') // normalize numbered list formatting
  .replace(/\n\s*<\/?(ul|ol|li)[^>]*>\s*/g, '') // remove leftover HTML tags like <ul>, <li>
  .replace(/^\s+$/gm, '') // remove lines that are just spaces

console.log(tp.file.path(true));
const file = app.vault.getAbstractFileByPath(tp.file.path);
console.log(file);

if (file && file instanceof TFile) {
	// Update file content
	await app.vault.modify(file, cleaned);
} 

%>
