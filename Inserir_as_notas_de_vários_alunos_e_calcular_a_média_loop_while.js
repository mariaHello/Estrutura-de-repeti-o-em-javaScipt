let soma = 0;
let quantidade = 0;
let nota;

while (true) {
  nota = parseFloat(prompt("Digite a nota do aluno (digite um número negativo para encerrar):"));
  
  if (nota < 0) {
    break;
  }

  soma += nota;
  quantidade++;
}

if (quantidade > 0) {
  let media = soma / quantidade;
  console.log("A média das notas é: " + media);
} else {
  console.log("Nenhuma nota válida foi inserida.");
}
