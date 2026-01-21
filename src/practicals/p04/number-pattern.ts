import * as process from 'process';

const input: string = process.argv[2];
const N: number = parseInt(input);


if (!isNaN(N) && N > 0) {
    for (let i = 1; i <= N; i++) {
        let line = "";
        
       
        for (let j = 1; j <= i; j++) {
            line += j;
        }
        
        
        const spaces = " ".repeat(N - i);
        
    
        console.log(spaces + line);
    }
}