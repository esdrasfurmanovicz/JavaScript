// for in lê os indices(0,1,2,3,4...) ou chaves dos objetos(nome, sobrenome, idade...)


const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: 30
}
for (let key in pessoa) {
    console.log(pessoa[key])
}   




/*
// const frutas = ['Pera', 'Maçã', 'Uva']

// for (let i = 0; i < frutas.length; i++){
//     console.log(frutas[i])
// }

// for (let i in frutas) {
//     console.log(frutas[i])
// }
*/