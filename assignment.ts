const number = (n: number) =>{
    let Spliting = n.toString().split("")
    let w: string="";

    while (Spliting.length !==0) {
        let k = Spliting.pop();
        w += `${k}`
    }

    return w  
}

let numbes = 1235 
console.log(number(numbes))

const largeNum = (n: number) =>{
    let z = n.toString().split("")
    let b= z.map(Number)

    const highestDigit = Math.max(...b);
    return highestDigit
}

const smallNum = (n: number) =>{
    let z = n.toString().split("")
    let b= z.map(Number)
    
    const lowestDigit = Math.min(...b);
    return lowestDigit
}


console.log(largeNum(18972453))
console.log(smallNum(18972453))