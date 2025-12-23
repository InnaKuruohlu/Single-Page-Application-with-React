export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const day = date.getDate();
  const year = date.getFullYear();

  const monthFormatted = date.toLocaleString("en-US", { month: "long",});

  const correctSuffix =
        day % 10 === 1 && day !== 11 ? "st"
      : day % 10 === 2 && day !== 12 ? "nd"
      : day % 10 === 3 && day !== 13 ? "rd" : "th";

  return `${monthFormatted} ${day}${correctSuffix}, ${year}`;
}



export function highlight(text: string, keyword: string) {
  if (!keyword.trim()) return text;

  const typiedWords = keyword.trim().split(/\s+/);

  const pattern = new RegExp(`(${typiedWords.join("|")})`, "gi");

  return text.split(pattern).map((part, index) =>
    typiedWords.some(
      word => part.toLowerCase() === word.toLowerCase()
    ) ? ( <span key={index} style={{ backgroundColor: "yellow" }}> {part} </span>
    ) : (part));
}