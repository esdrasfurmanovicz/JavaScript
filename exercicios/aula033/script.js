function fizzBuz(num){
    if (typeof(num) != Number && num % 5 != 0 && num % 3 != 0){
        console.log(num)
    } else if(num % 5 == 0 && num % 3 == 0){
        console.log('FizzBuzz '+ num)
    }
    else if(num % 3 == 0){
        console.log('Fizz ' + num)
    } else{
        console.log('Buzz ' +num)
    }
}

for (let i = 0; i<=100; i++){
    fizzBuz(i);
}