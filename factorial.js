/* let factorial = 1;
for(let i=5; i>=1; i--){
    factorial = factorial * i;
}
console.log(factorial) */

function factorial(number){
    if(number == 1){
        return 1;
    }
    return number * factorial(number - 1);
}
const result = factorial(1);
console.log(result)