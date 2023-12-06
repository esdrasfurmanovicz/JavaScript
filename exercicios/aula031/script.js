// Escreva uma função que receba 2 numeros e retorna o maior entre eles

function maiorQue(n1,n2){
    if (n1 > n2) {
        return `O maior valor é ${n1}`;
    } else{
        return `O maior valor é ${n2}`
    }
}
console.log(maiorQue(8,10))