let numero;
let contador = 1;

numero = Number(prompt("Digite um número:"));

while (contador <= 10) {
    console.log(numero + " * " + contador + " = " + numero * contador);
    contador++;
}