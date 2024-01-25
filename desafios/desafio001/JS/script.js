let calcInput = document.querySelector('#calcInput')

function add(n) {
    calcInput.value = calcInput.value.concat(n)
}
function apagarAll(){
    calcInput.value = ''
}
function apagar(){
    calcInput.value = calcInput.value.substring(0, calcInput.value.length -1)
}
function result(){
    let valor = calcInput.value
    if(valor != undefined){
        calcInput.value = eval(valor)
    }
}
