// once you declare a variable using, it cannot be re assigned
//example

// const x = 2;

// x = 1;


// variables declared to a function with var are scoped to the function

// variables declared to the function with let are scoped to the block
// function loop (){
//     for(let i = 0; i < 5; i++){
//         console.log(i)
//     }

// }
// console.log(loop())

const person ={
    name : 'josh',
    Tree(){
        console.log(this);
    }
}

person.Tree()