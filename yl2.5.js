const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Kirja suurus? `, suurus => {
    rl.question('Pealkiri? ', pealkiri =>{ 
        rl.question('Kas sisaldab faili? ', fail =>{ 
            if (parseFloat(suurus) <= 1.0){
                if (pealkiri !== ""){
                    if (fail.toLowerCase() == "jah"){
                        console.log("Ei ole spam!")
                    } else{
                        console.log("On spam!")
                    } 
                }else{
                    console.log("On spam!")
                }  
            } else{
                console.log("On spam!")
            } 
  
    }) 
}) 
});