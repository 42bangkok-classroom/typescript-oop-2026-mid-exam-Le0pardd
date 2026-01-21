export function printPattern(input: any) {
    const N = parseInt(input);

    if (isNaN(N) || N <= 0) {
        return;
    }

    for (let i = 1; i <= N; i++) {
        let line = "";
        
        for (let j = 1; j <= i; j++) {
            line += j;
        }
        T
        const spaces = " ".repeat(N - i);
        console.log(spaces + line);
    }
}





