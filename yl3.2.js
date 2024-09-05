const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let add = 2;
let porgandid = 0;
let i = 0;
rl.question(`Ringide arv: `, ringid => {
    while (parseInt(ringid) > i) {
        porgandid += add;
        add += 2;
        ringid = parseInt(ringid) - 2;
        if (ringid < 0) {
            add -= 2;
            porgandid -= add;
            break;
        }
    }
    console.log('porgandite arv: ' + porgandid)
    rl.close()
});