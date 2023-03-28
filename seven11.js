var number = prompt("Enter a number");

let num = parseInt(number);

let num1 = 11;
let num2 = 7;

if (num % num1 == 0 && num % num2 == 0){
    console.log(num + " is divisible by both 7 and 11.");
}

else if (num % num2 == 0){
    console.log(num + " divisible by 7" );

}

else if (num % num1 == 0){
 console.log( num + " divisible by 11 ");
} 

else (num != num1 + num2)
    console.log( num + " is divisible by neither 7 nor 11. ");


