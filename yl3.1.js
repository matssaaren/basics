const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Sisestage mitu korda aratada: : `, times => {
    i = 0
    while (i != parseInt(times)) {
        console.log('Touse ja sara!')
        i++
    }
    rl.close()
});