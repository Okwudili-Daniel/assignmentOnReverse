const number = (n: number) =>{
    let Spliting = n.toString().split("")
    let w: string="";

    while (Spliting.length !==0) {
        let k = Spliting.pop();
        w += `${k}`
    }
    let b= w.split(" ").map(Number)

    const highestDigit = Math.max(...b);
const lowestDigit = Math.min(...b);

    return w

  
}

let numbes = 1235 
console.log(number(numbes))


let numbers = 1235 

let z = numbers.toString().split("")
let b= z.map(Number)

    const highestDigit = Math.max(...b);
const lowestDigit = Math.min(...b);

console.log(highestDigit)
console.log(lowestDigit)
let w: string = ""

while (z.length !==0) {
    // let k = z.pop();
    // w += `${k}`
}