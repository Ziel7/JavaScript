let nome;
let idade;

nome = prompt("Qual é o seu nome ?")
idade = prompt("Qual é a sua idade ?")

if (idade >= 18) {
  console.log(nome + ", você é maior de idade!")
} 
else {
  console.log(nome + ", você é menor idade!")
}