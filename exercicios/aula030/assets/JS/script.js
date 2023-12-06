const numeros = [1,2,3,4,5,6,7,8,9]
for (let i of numeros){

    if(i === 2){
        console.log('Pulei o numero 2')
        continue; // se i for igual a 2, ele continua para a proxima a iteração do laço, pulando o numero 2 e não iterando ele
    }
    console.log(i)
    if(i === 7){
        console.log('7 encontrado, saindo...')
        break
    }
}