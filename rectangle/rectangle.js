const fs = require('fs')

const myArgv = process.argv.slice(2)

const file1 = fs.readFileSync('./'+myArgv[0], "utf8").split('\n');
const file2 = fs.readFileSync('./'+myArgv[1], "utf8").split('\n');

newFile1 = file1.map(file => file.trim())
newFile2 = file2.map(file => file.trim())

function checkCoordination(file1, file2) {
  let tab1 = file1
  let coordination=[];
  for(let i = 0; i < file2.length; i++){
    let indexOfMatching = file2[i].search(tab1[0])
    if(indexOfMatching>0) {
      coordination.push([indexOfMatching, i])
      tab1.shift()
    }
  }
  return coordination
}

function rectangle(coordination){
  let isEqual = false 
  for(let i= 0; i < coordination.length;i++){
    const isLimit = i+1 < coordination.length;
    if(isLimit){
      const isXEqual = coordination[i][0] === coordination[i+1][0]
      const isYEqual = coordination[i][1]+1 === coordination[i+1][1]
      if(isXEqual && isYEqual){
        isEqual = true
      } else {
        isEqual = false
      }
    }
  }
  if(isEqual) {
    return coordination[0];
  } else {
    return 'No match!!!'
  }
}

const position = checkCoordination(newFile1, newFile2)
console.log(rectangle(position))