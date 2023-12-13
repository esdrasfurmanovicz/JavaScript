function fizzBuz(num){
    if (typeof(num) != Number && num % 5 != 0 && num % 3 != 0){
        console.log(num)
    } else if(num % 5 == 0 && num % 3 == 0){
        console.log('FizzBuzz')
    }
    else if(num % 3 == 0){
        console.log('Fizz')
    } else{
        console.log('Buzz')
    }
}

for (let i = 0; 0<=100; i++){
    fizzBuz(i);
}