alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 4;
console.log(numeroSecreto)
let chute = prompt('Escolha um numero entre 1 e 10');

// se o chute for igual ao numero secreto
if (chute == numeroSecreto ) {
    console.log('Isso ai! Você descobriu o numero secreto (4)');
} else {
    alert('voce errou :( ')
}