#!/usr/bin/env node

function decimalToBinary(decimalNumber) {
    let number = decimalNumber,
        result = [];

    while(number > 0) {
        result.push(number%2);
        number = number >>> 1;
    }
    return result.reverse();
}

/*
01010

10101
00001
10110
 */
function signedDecimalToBinary(decimalNumber) {
    if(decimalNumber >= 0) {
        return decimalToBinary(decimalNumber);
    }
    let result = [], carry = 1;

    result = [0].concat(decimalToBinary(Math.abs(decimalNumber)));
    result = result.map(d=>(~d)&1).reverse().map(d=>{
        let r = d ^ carry;
        carry = d & carry;
        return r;
    }).reverse();

    return result;
}

console.log(decimalToBinary(10).join(''));
console.log(signedDecimalToBinary(-10).join(''));
console.log(signedDecimalToBinary(-2).join(''));
