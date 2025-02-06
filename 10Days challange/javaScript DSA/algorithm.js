// Big-O Notation
/*function summation(n) {
    let sum = 0;
    for (let i=1; 1 < n; i++) {
        sum += i;
    }
    return sum;
}*/


// Math Algorithms
// Fibonacci Sequence
function fibonacci(n){
    const fib = [0, 1]
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
}

console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(7))
//Big-O = O(n)


//factorial of Number
function factorial(n) {
    let result = 1;
    for(let i = 2; 1 < n; i++){
        result = result * i
    }
    return result
}

console.log(factorial(2))
console.log(factorial(5))
console.log(factorial(8))
//Big-O = O(n)


//Prime Number
function isPrime(n){
    if (n < 2){
        return false
    }
    for(let i = 2; i < n; i++){
        if(n % i ===0){
            return false
        }
    }
    return true
}

console.log(isPrime(5))
//Big-O = O(n)

//Primarily the loop can be changed to 
// for(let i =2; i <= marth.sqrt(n); i++)
// Big-O = O(sqrt(n))


//Power of Two
function isPowerOfTwo(n){
    if(n < 1){
        return false
    }
    while(n>1){
        if(n % 2 !== 0){
            return false
        }
        n = n / 2
    }
    return true
}

console.log(isPowerOfTwo(4))
//BIG-O = O(logn)

/*For Bitwise
function isPowerOfTwoBitwise(n){
    if(n < 1){
        return false
    }
    return(n & (n-1)) === 0
}
Big-O = O(1)*/ 