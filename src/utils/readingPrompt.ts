export function parseReadingPrompt(prompt: string) {
  const lines = prompt.split("\n");
  const title = lines[0]?.trim() ?? "";
  const rest = lines.slice(1).join("\n").trim();
  const blocks = rest
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);
  const questionText = blocks.pop() ?? "";
  return { title, paragraphs: blocks, questionText };
}
