const comment = "TypeScript is a strongly typed programming language"

function shortenComment(comment: string): string {
  if (!comment || comment.trim() === "") {
    return "";
  }
  
  const words = comment.split(" ");
 
  const filteredWords = words.filter(word => {
    const length = word.length;
    return length >= 5 && length <= 10;
  });
  
  if (filteredWords.length === 0) {
    return "";
  }
  
  return filteredWords.join(" ");
}

console.log(shortenComment(comment));
