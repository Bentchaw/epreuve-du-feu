const fs = require('fs')

const myArgv = process.argv.slice(2)
const myNbr = parseInt(myArgv[0])

function factoriel(nbr){
    if(nbr===0){
        return 1
    }
    return nbr * factoriel(nbr-1)
}

console.log(factoriel(myNbr))