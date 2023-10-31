console.clear();

// class Stack{
//     public stack: Array<number>;

//     constructor(){
//         this.stack= [];
//     }

//     addValue(val: number){
//         this.stack.pop();

//         return this.stack;
//     }
//     removeValue(val: number){
//         this.stack.pop();

//         return this.stack;
//     }

//     size(){
//         return this.stack.length;
//     }

//     peek(){
//         return this.stack[this.size() - 1];
//     }

//     isEmpty(){
//         if (this.size() === 0) {
//             return true;
//         } else {
//             return false;
//         }
//     }

//     p(){
//         let prob = ["Lagos sky appears to be white and Sunny today"]

//         console.log(prob.reverse())
//     }    
// }

// let stack = new Stack();

// // stack.addValue(4)
// // stack.addValue(5)
// // stack.addValue(2)
// // stack.addValue(1)

// console.log(stack.p);
// console.log(stack);
// console.log(stack);
// console.log(stack.isEmpty())

// 334456

// const nextString = (b: string) =>{
//     let z: Array<string>  = b.split(" ");
//     let w: string= "";

//     while (z.length !== 0) {
//         let k = z.pop();
//         w += ` ${k}`;
//     }

//     return w;
// };

// let word: string = "LAgod sky appears to be white and sunny today";
// console.log(nextString(word))

const number = (n: number) =>{
    let Spliting = n.toString().split("")
    let w: string="";

    while (Spliting.length !==0) {
        let k = Spliting.pop();
        w += `${k}`
    }
    return parseInt(w)

  
}

let numbes = 1235 
console.log(number(numbes))


// let numbers = 1235 

// let z = numbers.toString().split("")
// let b= z.map(Number)

//     const highestDigit = Math.max(...b);
// const lowestDigit = Math.min(...b);


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