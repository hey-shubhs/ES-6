// Generators are a new type of function that 
// allow us to pause functions
// in the middle of execution to be resumed later.

function* director(){
    yield "Three";
    yield "Two";
    yield "One";
    yield "Action";
}

let countdown = director();

console.log(countdown.next().value);
console.log(countdown.next().value);
console.log(countdown.next());
console.log(countdown.next());
console.log(countdown.next());