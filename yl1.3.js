const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Sisesta astme alus:`, alus => {
    rl.question(`Sisesta astendaja:`, astendaja => {
        console.log(alus**astendaja);
        rl.close()
    })
});
