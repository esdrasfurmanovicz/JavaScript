function random(min, max){
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

let rand = random(1,50)

// while verifica e depois executa caso seja verdadeiro
while (rand !== 10){
    rand = random(1,50)
    console.log(rand)
}
// do while executa e depois verifica, se verdadeiro ele executa novamente
do{
    rand = random(1,50)
    console.log(rand)
} while (rand !== 10)