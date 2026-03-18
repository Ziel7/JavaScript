let nome;
let peso;
let altura;
let imc;

nome = prompt("Qual é o seu nome ?");
peso = Number(prompt("Digite o seu peso!"));
altura = Number(prompt("Digite a sua altura!"));

if (!nome || !peso || !altura) {
    console.log("Dados faltando!");
} else {

    imc = peso / (altura * altura);

    if (imc < 18.5) {
        console.log(nome + ", você está abaixo do peso.");
    } else if (imc >= 18.5 && imc <=24.9) {
        console.log(nome + ", você está com o peso normal.");
    } else if (imc >= 25 && imc <= 29.9) {
        console.log(nome + ", você está com sobrepeso.");
    } else if (imc >= 30) {
        console.log(nome + ", você está com obesidade.");
    }
}