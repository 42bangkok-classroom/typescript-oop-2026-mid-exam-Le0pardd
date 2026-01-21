const score =Number(ProcessingInstruction.arguments[2]);

if (isNaN(score) || score <0 || score >100) {
console.log("Invalid Input");
} else if (score >= 100) {
console.log("A");
} else if (score >= 79) {
console.log("B");
} else if (score >= 69) {
console.log("C");
} else if (score >=59) {
console.log("D");
} else {
console.log("F");
}
