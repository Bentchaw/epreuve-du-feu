const fs = require('fs')

const myArgv = process.argv.slice(2)
const myNbr = parseInt(myArgv[0])
function scale2(nbr) {
  let text = ""
  if(typeof nbr === "number") {
    let decreased = nbr-1     
    for(let x = 0; x < nbr; x++){
        for(let y = 0; y < nbr; y++){
        if(y < decreased) {
            text += ' '
        } else {
            text += '#'
        }
        }
        decreased--
        text += '\n'
    }
    return text
    }
}

console.log(scale2(myNbr))