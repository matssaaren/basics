const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Kas soovite valida istekoha "ise" või loosida "loos"? `, valik => {
    if (valik.toLowerCase() == "ise"){
        rl.question('Kas "aken" või "muu"?', koht =>{ 
            if (koht.toLowerCase() == "aken"){
                console.log("Te valisite istekoha akna kõrval!")
            } else if (koht.toLowerCase() == "muu"){
                console.log("Te valisite istekoha mitte akna kõrval!")
            } 
            
            rl.close();
              })


    } else if (valik.toLowerCase() == "loos"){
        let loosx = Math.random() * 30
        if (loosx <= 10){
            console.log("Loosisite endale akna poolse koha!")
            rl.close();
        } else{
            console.log("Loosisite endale mitte akna poolse koha!")
            rl.close();
        } 
    } 
  
});