const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question(`Kysimus: `, vastus => {
//     console.log(vastus)
//     rl.close()
// });

rl.question(`Ainepunktid: `, ainePunktid => {
    rl.question(`Nadalaid: `, nadalaid => {
        let ajakulu = parseInt(ainePunktid) * 26 / parseInt(nadalaid)
        console.log('yhe n2dala ajakulu on ' + Math.round(ajakulu))
        rl.close()
    });
});
