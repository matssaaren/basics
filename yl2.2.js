const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Leedu naise nimi: `, nimi => {
    if (nimi.slice(-2) == "ne") {
        console.log(nimi + ' on abielus')
    } else if (nimi.slice(-2) == "te") {
        console.log(nimi + ' on vallaline')
    } else if (nimi.slice(-1) == "e") {
        console.log(nimi + ' on maaramatta') 
    } else {
        console.log(nimi + ' pole leedu nimi')
    }
    rl.close()
});