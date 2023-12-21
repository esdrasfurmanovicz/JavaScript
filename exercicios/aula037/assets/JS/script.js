function getHour(segundos){
    const data = new Date(segundos * 1000)
    return data.toTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

let relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('#inic')
const parar = document.querySelector('#paus')
const zerar = document.querySelector('#zerar')
let segundos = 0

function iniciarRelogio(){
    const timer = setInterval(function(){
        segundos++
        relogio.innerHTML = getHour(segundos)
    }, 1000)
}

iniciar.addEventListener('click', function(){
    iniciarRelogio()
})