export function run(arg: string) {
    const N: number = parseInt(arg);

    if (isNaN(N) || N <= 0) {
        return;
    }

    for (let i = 1; i <= N; i++) {
        let numbers = "";
        
        for (let j = 1; j <= i; j++) {
            numbers += j;
        }
        
        const spaces = " ".repeat(N - i);
        
        console.log(spaces + numbers);
    }
}

import * as process from 'process';
run(process.argv[2]);





