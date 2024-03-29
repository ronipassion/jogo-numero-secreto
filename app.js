alert('Jogo do número secreto!');
let valorMaximo = 100;
let numeroSecreto = parseInt(Math.random() * valorMaximo + 1);
let chute;
console.log(numeroSecreto);
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Digite um número de 1 a ${valorMaximo}`);
    if (chute == numeroSecreto) {
        break;
    } else if(chute > numeroSecreto) {
        alert(`Você errou! O número secreto é menor que ${chute}`);
    } else{
        alert(`Você errou! O número secreto é maior que ${chute}`);
    }
    tentativas++
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 
alert(`Você acertou! O número secreto é ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);