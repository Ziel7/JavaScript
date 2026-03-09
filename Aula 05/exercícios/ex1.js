let nome
let peso
let altura
let imc

nome = prompt("Qual é o seu nome ?")
peso = Number(prompt("Qual é o seu peso (kg) ?"))
altura = Number(prompt("Qual a sua altura (m) ?"))

imc = peso / altura ** 2

console.log(nome + ", seu IMC é " + imc.toFixed(2))
