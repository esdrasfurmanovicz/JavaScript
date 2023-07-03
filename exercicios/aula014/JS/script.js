const numero = Number(prompt('Digite um número'))
const numeroTitulo = document.getElementById('num-titl')
const raizQuadrada = document.getElementById('raiQuadr')
const inteiro = document.getElementById('inter')
const nan = document.getElementById('nan')
const baixo = document.getElementById('baixo')
const cima = document.getElementById('cima')
const decim2 = document.getElementById('decim2')

numeroTitulo.innerHTML = numero
raizQuadrada.innerHTML = `<p> Raiz quadrada: ${numero ** 0.5}</p>`
inteiro.innerHTML = `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`
nan.innerHTML = `<p>É NaN: ${Number.isNaN(numero)}</p>`
baixo.innerHTML = `<p>Arredondado para baixo: ${Math.floor(numero)}</p>`
cima.innerHTML = `<p>Arredondado para cima: ${Math.ceil(numero)}</p>`
decim2.innerHTML = `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`
