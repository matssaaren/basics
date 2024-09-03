const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`vanus? `, vanus => {
    rl.question('sugu? n või m ', sugu =>{ 
        rl.question('treening 1-3? ', treening =>{ 

    
  
  if (sugu.toLowerCase() == "m"){
    let maxed = 220-(vanus/100*88)
    if (treening == "1"){
        let v = (maxed/100*50)
        let s = (maxed/100*70)
        console.log("Väikseim pulss = "+v.toString())
        console.log("Suurim pulss = "+s.toString())
    } else if (treening == "2"){
        let v = (maxed/100*70)
        let s = (maxed/100*80)
        console.log("Väikseim pulss = "+v.toString())
        console.log("Suurim pulss = "+s.toString())
    } else if (treening == "3"){
        let v = (maxed/100*80)
        let s = (maxed/100*87)
        console.log("Väikseim pulss = "+v.toString())
        console.log("Suurim pulss = "+s.toString())
    }
  } 
  if (sugu.toLowerCase() == "n"){
    let maxed = 206-(vanus/100*88)
    if (treening == "1"){
        let v = (maxed/100*50)
        let s = (maxed/100*70)
        console.log("Väikseim pulss = "+v.toString())
        console.log("Suurim pulss = "+s.toString())
    } else if (treening == "2"){
        let v = (maxed/100*70)
        let s = (maxed/100*80)
        console.log("Väikseim pulss = "+v.toString())
        console.log("Suurim pulss = "+s.toString())
    } else if (treening == "3"){
        let v = (maxed/100*80)
        let s = (maxed/100*87)
        console.log("Väikseim pulss = "+v.toString())
        console.log("Suurim pulss = "+s.toString())
    }
  }
  
  rl.close();
    }) 
}) 
});