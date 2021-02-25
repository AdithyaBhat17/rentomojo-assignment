export function getWordCount(content: string) {
  // here we assume the average WPM read by a user to be 250.
  // studies show that an average user can read 249 english words per minute.
  return Math.ceil(content.split(" ").length / 250);
}

export function formatWordCount(content: string | undefined): string | null {
  if (content === undefined) return null;
  const wordCount = getWordCount(content);
  return `${wordCount} min read.`;
}
