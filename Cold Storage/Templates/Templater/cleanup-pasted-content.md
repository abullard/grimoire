<%*
const content = tp.file.content;

// Regex cleanup operations
let cleaned = content
  .replace(/\n{3,}/g, '\n\n') // collapse multiple blank lines
  .replace(/[ \t]+$/gm, '') // trim trailing spaces
  .replace(/^\s*[-*+]\s+/gm, '- ') // normalize bullet points
  .replace(/^\s*\d+\.\s+/gm, '1. ') // normalize numbered list formatting
  .replace(/\n\s*<\/?(ul|ol|li)[^>]*>\s*/g, '') // remove leftover HTML tags like <ul>, <li>
  .replace(/^\s+$/gm, '') // remove lines that are just spaces

// Update file content
await tp.file.overwrite(cleaned);
%>
