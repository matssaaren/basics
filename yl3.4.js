const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`mitu poissi tahab ouna: `, arv => {
    if (arv == "") {
        arv = Math.floor(Math.random() * 7) + 1;
    } else {
        arv = parseInt(arv)
    }
    let apples = 14;
    let i = 0;
    while (apples > i) {
        let takes = Math.floor(Math.random() * 2) + 1;
        console.log(takes)
        apples = apples - takes;
        i++
    }
    console.log('jarel on ' + apples + ' ouna')
    rl.close()
});