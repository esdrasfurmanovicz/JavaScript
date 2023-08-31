const form = document.querySelector('#formulario')
form.addEventListener('submit', function(e) {
    e.preventDefault()

})
function setResultado(msg) {
    const resultado = document.querySelector('.result')
    resultado.innerHTML = ' '
    const p = document.createElement('p')
    p.classList.add('paragrafo.resultado')
    resultado.appendChild(p)
}









/*
           MINHA TENTATIVA

function escopo() {
    const form = document.querySelector('form')
    const erro = document.querySelector('.erro')
    const resultado = document.querySelector('.result')

    function calculaImc(evento) {
        evento.preventDefault()
        let peso = document.querySelector('.peso')
        let altura = document.querySelector('.altu')
        const calc = peso.value / (altura.value ** 2)
        if (calc < 18.5){
            resultado.innerHTML = `<p>Seu IMC é ${calc.toFixed(2)} (Abaixo do peso)</p>`
        } else if (calc < 24.9) {
            resultado.innerHTML = `<p>Seu IMC é ${calc.toFixed(2)} (Peso normal)</p>`
        } else if (calc < 29.9) {
            resultado.innerHTML = `<p>Seu IMC é ${calc.toFixed(2)} (Sobrepeso)</p>`
        } else if (calc < 34.9) {
            resultado.innerHTML = `<p>Seu IMC é ${calc.toFixed(2)} (Obesidade grau 1)</p>`
        } else if (calc < 39.9) {
            resultado.innerHTML = `<p>Seu IMC é ${calc.toFixed(2)} (Obesidade grau 2)</p>`
        } else if (calc >= 40) {
            resultado.innerHTML = `<p>Seu IMC é ${calc.toFixed(2)} (Obesidade grau 3)</p>`
        }

        if (isNaN(peso.value)){
            erro.innerHTML = 'Peso Invalido'
        } else if (isN) {
            erro.innerHTML = 'Peso Invalido'
        }
    }
    form.addEventListener('submit', calculaImc)
}
escopo()
*/