const N: number = parseInt(prce.argv[2]);

if (isNaN(N) || N <= 0) {
    console.log("Please a number");
    process.exit(1);
}
for (let i = 1; i <= N; i++) {
    let line = "";
    
    for (let j = N; j > N - i; j--) {
        line += j;
    }
    
    const spaces = " ".repeat(N - i);
    console.log(spaces + line);
}





