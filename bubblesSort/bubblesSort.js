const fs = require('fs')

const myArgv = process.argv.slice(2)

function triABulle(tab){
  let cup;
  for(let i = 0; i <= tab.length; i++){
    if(tab[i]<tab[i+1]){
      cup = tab[i]
      tab[i] = tab[i+1]
      tab[i+1] = cup 
      i = 0-1
    }
  }
  return tab
}

console.log(triABulle(myArgv))