// Declaração de função (Function hoisting) 
/*
    oi()
    function oi(){
        console.log('Olá, Mundo!')
    }
*/

// First-class objects (Objetos de primeira classe)
/*
    const souUmDado = function (){
        console.log('Sou um dado')
    }
    function executaFuncao(funcao){
        funcao()
    }
    executaFuncao(souUmDado)
*/

// Arrow Function
/*
    const arrow = () => {
      console.log('Sou uma arrow')
    }
    arrow()
*/

const obj = {
    falar(){
        console.log("Eu estou falando")
    }
}
obj.falar()