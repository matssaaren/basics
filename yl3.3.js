const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Taringute arv: : `, arv => {
    let i = 0;
    while (arv > i) {
        let taring = Math.floor(Math.random() * 6) + 1;
        console.log(taring)
        i++
    }
    console.log()
    rl.close()
});