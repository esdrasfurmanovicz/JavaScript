try{ // É executado até encontrar um erro
    console.log('Abrindo o arquivo')
    console.log('Manipulando o arquivo, gerou erro')
    console.log(a)
    console.log('Fechei o arquivo')
}catch(err){  // executado quando possuir erro
    console.log('Tratando o erro')
}finally{  // Sempre é executado
    console.log('FINALLY: Sempre é executado')
}