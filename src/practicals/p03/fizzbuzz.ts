export function fizzbuzz(input: any) {
    const n = Number(input);
    if (Number.isNaN(n) || n <= 0) {
      return;
    }
  
   
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  }

