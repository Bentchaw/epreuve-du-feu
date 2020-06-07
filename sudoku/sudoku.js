const fs = require('fs')

const myArgv = process.argv.slice(2)

const file1 = fs.readFileSync('./'+myArgv[0], "utf8").split('\n');

newFile1 = file1.map(file => file.trim())
const DATA_ARRAY = ['1','2','3','4','5','6','7','8','9'];


function checkRow(sudoku){
    let sudokuBis = sudoku;
    let dataBis = DATA_ARRAY;
    for(let i = 0; i < sudoku.length; i++){  
        for(let j = 0; j < sudoku[i].length; j++){
            for(let k = 0; k < dataBis.length; k++){
                if(sudoku[i][j]===dataBis[k]){
                    dataBis.splice(k,1)
                }
            }
        }
        if(dataBis.length === 1) {
            const newSudokuBis = sudokuBis[i].replace('_', dataBis[0])
            sudokuBis[i] = newSudokuBis;
        }
        dataBis = ['1','2','3','4','5','6','7','8','9'];
    } 
    return sudokuBis
}

function checkColumn(sudoku){
    let sudokuBis = sudoku;
    let dataBis = DATA_ARRAY;

    let i = 0;
    let j = 0;

    while(j < sudokuBis.length){
        const DataReduce = checkColumnDataArray(i,j,sudokuBis,dataBis)
        if(DataReduce.dataBis.length === 0 || DataReduce.dataBis.length > 1) {
            dataBis = ['1','2','3','4','5','6','7','8','9'];
            i = 0
            j++
        } else {
            let newsudoku = replaceAt(sudokuBis[DataReduce.tab[0]], DataReduce.tab[1], DataReduce.dataBis[0])
            sudokuBis[DataReduce.tab[0]] = newsudoku
            dataBis = ['1','2','3','4','5','6','7','8','9'];
            j++
        }
    }
    return sudokuBis
}

function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}

function checkColumnDataArray(i, j, sudokuBis, dataBis){ //reduce DATA
    let z = 0
    let tab = []
    while(i < sudokuBis.length){
        for(let k = 0; k < dataBis.length; k++){
            if(sudokuBis[z][j]===dataBis[k]){
                dataBis.splice(k,1)
            } else if(sudokuBis[z][j]==='_') {
                tab = [z,j]
            }
        }
        z++
        i++
    }
    return {dataBis, tab}
}

function checkSquare(sudoku){
    let sudokuBis = sudoku;
    let dataBis = DATA_ARRAY;
    let i = 0
    let j = 0
 
    while(i < sudokuBis.length){
        const DataReduce = checkSquareDataArray(i,j,sudokuBis,dataBis)
        if(DataReduce.dataBis.length === 0 || DataReduce.dataBis.length > 1) {
            dataBis = ['1','2','3','4','5','6','7','8','9'];   
        } else {
            const newsudoku = replaceAt(sudokuBis[DataReduce.tab[0]], DataReduce.tab[1], DataReduce.dataBis[0])
            console.log("je suis là",newsudoku)
            sudokuBis[DataReduce.tab[0]] = newsudoku
            dataBis = ['1','2','3','4','5','6','7','8','9'];
        }
        if(j < sudokuBis.length-4){ 
            j+=4
        } else {
            j=0
            i+=4
        }
    }
    return sudokuBis
} 

function checkSquareDataArray(i, j, sudokuBis, dataBis){ //reduce DATA
    let z = 3+j
    let tab = []

    while(i < z){
        while(j < z){
            for(let k = 0; k < dataBis.length; k++){
                if(sudokuBis[i][j]===dataBis[k]){
                    dataBis.splice(k,1)
                } else if(sudokuBis[i][j]==='_') {
                    tab = [i,j]
                }
            }
            j++
        }
        j-=3
        i++
    }
    return {dataBis, tab}
}


function sudoku(sudoku){
    const rowCheckedSudoku = checkRow(sudoku)
    const columnCheckedSudoku = checkColumn(rowCheckedSudoku)
    const sudokuFinal = checkSquare(columnCheckedSudoku)
    return sudokuFinal.join('\n')
}

console.log(sudoku(newFile1))