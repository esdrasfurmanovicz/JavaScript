function funcao (){
    console.log(arguments) // todos os argumentos
}
funcao('Olá', 2, 6, 9, 'Otavio')

function soma (a, b = 4, c = -1){ // arg com valor pré definido caso undefined
    console.log( a + b + c)
}
soma(3, undefined, 20) 

function objeto ({nome, sobrenome, idade}){ // destruturação de objetos e arrays
    console.log(nome, sobrenome, idade)
}
let valores = ({nome: 'João', sobrenome:'Silva' ,idade: '20'})
objeto(valores) 

function conta (operador, acumulador, ...numeros){ // ... rest operator
    for (let numero of numeros){
        if (operador === '+')acumulador += numero 
        if (operador === '-')acumulador -= numero
        if (operador === '/')acumulador /= numero
        if (operador === '*')acumulador *= numero
    }
    console.log(acumulador)
}
conta('+', 1, 20, 30, 40, 50)