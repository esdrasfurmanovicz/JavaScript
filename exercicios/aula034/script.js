// try{
//     console.log(naoExiste)
// }catch(err){
//     console.log(`a variavel não existe`)
// }

function soma(x,y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new Error("x e y precisam ser numeros")  // Trata a maneira que o erro é apresentado
    }
    return x + y
}

try{ // É executado até encontrar um erro
    console.log(soma(1, 2))
    console.log(soma('1', 2))
} catch(error){  // executado quando possuir erro
    console.log(error)
}
