let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let palpite;

do {
  palpite = parseInt(prompt("Adivinhe o número entre 1 e 10:"));

  if (palpite > numeroSecreto) {
    console.log("O número é menor.");
  } else if (palpite < numeroSecreto) {
    console.log("O número é maior.");
  }
} while (palpite !== numeroSecreto);

console.log("Parabéns! Você acertou. O número secreto era " + numeroSecreto);
