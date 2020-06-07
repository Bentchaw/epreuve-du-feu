const fs = require('fs')

const myArgv = process.argv.slice(2)
let dictionary = fs.readFileSync('./'+myArgv[1], "utf8").split('\n');

const strInput = myArgv[0];
dictionary = dictionary.map(file => file.trim())

function anagrammes(strInput, arrayOfStr){
    const resultArray = []
    const strInputSorted = strInput.split("").sort().join("")
    
    const arrayOfStrSortted = arrayOfStr.map(str => {
        return str.split("").sort().join("")
    })

    for(let i = 0; i < arrayOfStrSortted.length; i++){
        const isInclude = arrayOfStrSortted[i]===strInputSorted
        if(isInclude){
            resultArray.push(arrayOfStr[i])
        }
    } 
    return resultArray
}

console.log(anagrammes(strInput, dictionary))