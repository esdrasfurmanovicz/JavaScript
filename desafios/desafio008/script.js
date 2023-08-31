const form = document.querySelector('.formulario')
const result = document.querySelector('.resultado')
function calcula(evento){
    evento.preventDefault()
    let n1 = document.querySelector('#num1')
    let n2 = document.querySelector('#num2')
    const soma = Number(n1.value) + Number(n2.value)
    result.innerHTML = `<p>${n1.value} mais ${n2.value} é igual a <strong>${soma}</strong></p>` 
}
form.addEventListener('submit', calcula)
