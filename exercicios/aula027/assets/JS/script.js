// for of lê os valores dos indices e das chaves de um objeto

const nome = 'Luiz Otavio'

for(let i of nome){
    console.log(i)
}
console.log('-------------------------')
nome.forEach(([valor, indice]) => {
    console.log(valor, indice)
});