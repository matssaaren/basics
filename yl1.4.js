const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`nimi: `, nimi => {
    rl.question('Lubatud kiirus: ', lubKiirus =>{
        rl.question('Tegelik kiirus: ', tegKiirus =>{
            if (parseInt(tegKiirus) > parseInt(lubKiirus)) {
                let trahv = (tegKiirus-lubKiirus)*3
                if (trahv > 190) {
                    console.log(nimi + ', kiiruse ületamise eest on teie trahv 190 eurot. Kiirust ületati ' + (tegKiirus - lubKiirus) + 'km/h võrra ja esialgne arvutus näitab trahviks '+ trahv +' eurot, aga see on üle maksimaalmäära.')
                } else {
                    console.log(nimi + ', kiiruse ületamise eest on teie trahv '+ trahv +' eurot. Kiirust ületati ' + (tegKiirus - lubKiirus) + 'km/h võrra.')
                }
            } else {
                console.log(nimi + ' ei ületanud kiirust! Mine edasi.')
            }
        rl.close();
    })
})
});