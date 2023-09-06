let multiply = function(x,y){
    console.log(x*y);
}

let multiplyClosure = function(x){
    return function(y){
        console.log("hello :- ",x*y);
    }
}

// let multiplyByTwo = multiply.bind(this, 2)
// multiplyByTwo(5)

// let multiplyByThree = multiply.bind(this, 3)
// multiplyByThree(5)

let multiplyByTwo = multiplyClosure(2)
multiplyByTwo(5)

let multiplyByThree = multiplyClosure(3)
multiplyByThree(5)