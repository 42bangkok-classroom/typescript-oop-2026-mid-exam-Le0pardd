import * as process from 'process';

export function shortenComment(comment: string): string {
  
    if (!comment || comment.trim() === "") {
        return "";
    }

    const words = comment.split(/\s+/);

    const filteredWords = words.filter(word => word.length >= 5 && word.length <= 10);

    return filteredWords.join(" ");
}

const inputArgument = process.argv[2];
if (inputArgument !== undefined) {
    console.log(shortenComment(inputArgument));
}