const paragrafos = document.querySelector('.paragrafos')
const bodyStyle = getComputedStyle(document.querySelector('body'))
const backColorBody = bodyStyle.backgroundColor
const ps = paragrafos.querySelectorAll('p')

for (let i of ps){
    i.style.backgroundColor = backColorBody
    i.style.color = 'white'
}
