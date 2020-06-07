const fs = require('fs')

const myArgv = process.argv.slice(2)

function majuscule(str){
    const arrayOfStr = str.split(' ')
    let newStr = ''
    for(let i = 0; i < arrayOfStr.length; i++){
        for(let j = 0; j < arrayOfStr[i].length; j++){
            if(j%2 !==0){
                newStr+= arrayOfStr[i][j].toUpperCase()
            } else {
                newStr+= arrayOfStr[i][j].toLowerCase()
            }
        }
        newStr+= ' '
    }
    return newStr;
}

console.log(majuscule(myArgv[0]))