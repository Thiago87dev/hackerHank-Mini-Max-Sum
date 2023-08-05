function miniMaxSum(arr) {
    let arr2 = [...arr]
    
    let maiorNumero = Math.max(...arr)
    let indexMaiorNum = arr.indexOf(maiorNumero)
    if(indexMaiorNum !== -1) arr.splice(indexMaiorNum, 1)
    let somaMenor = arr.reduce((ac, v) => ac + v)

    let menorNum = Math.min(...arr2)
    let indexMenorNum = arr2.indexOf(menorNum)
    if(indexMenorNum !== -1) arr2.splice(indexMenorNum, 1)
    let somaMaior = arr2.reduce((ac, v) => ac + v)
    
    return [somaMenor, somaMaior]
}

console.log(miniMaxSum([1, 2, 3, 4, 5]));