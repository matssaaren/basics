const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Ohu Temperatuur: `, ohuTemp => {
    let temp = parseFloat(ohuTemp)
    if (temp < 4.0) {
        console.log('On jaatumise oht!')
    } else {
        console.log('Ei ole jaatumis ohtu.')
    }
    rl.close()
});