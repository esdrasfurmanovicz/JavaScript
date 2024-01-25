const square = document.querySelector('#square')
let topLeft = document.querySelector('#topLeft')
let topRight = document.querySelector('#topRight')
let bottomRight = document.querySelector('#bottomRight')
let bottomLeft = document.querySelector('#bottomLeft')
let bl = document.querySelector('#blValue')
let tl = document.querySelector('#tlValue')
let tr = document.querySelector('#trValue')
let br = document.querySelector('#brValue')
const zerar = document.querySelector('#zerar')
const copiar = document.querySelector('#copiar')

topLeft.addEventListener('input', function(){
    valor = topLeft.value
    square.style.borderTopLeftRadius = valor + '%'
    mostrarValor(valor, tl)
})

topRight.addEventListener('input', function(){
    valor = topRight.value
    square.style.borderTopRightRadius = valor + '%'

    mostrarValor(valor, tr)
})

bottomRight.addEventListener('input', function(){
    valor = bottomRight.value
    square.style.borderBottomRightRadius = valor + '%'

    mostrarValor(valor, br)
})

bottomLeft.addEventListener('input', function(){
    valor = bottomLeft.value
    square.style.borderBottomLeftRadius = valor + '%'
    mostrarValor(valor, bl)
})
function mostrarValor(inp, local){
    local.innerText = inp + '%'
}
function zerarValor(inp, local){
    inp.value = 0
    local.innerText = '0%'
}
zerar.addEventListener('click', function(){
    square.style.borderRadius = '0%'
    zerarValor(topLeft, tl)
    zerarValor(topRight, tr)
    zerarValor(bottomLeft, bl)
    zerarValor(bottomRight, br)
})

copiar.addEventListener('click', function(){
    let span = document.querySelector('#span')
    let texto = 
    `border-top-right-radius: ${topRight.value}%;
    border-top-left-radius: ${topLeft.value}%;
    border-bottom-right-radius: ${bottomRight.value}%;
    border-bottom-left-radius: ${bottomLeft.value}%;`;
    navigator.clipboard.writeText(texto)
    setTimeout(function(){
        span.style.opacity = 1
        setTimeout(function(){
            span.style.opacity = 0
        },2000)
    }, 400)

})