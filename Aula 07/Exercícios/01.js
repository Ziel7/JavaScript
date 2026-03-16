let nome;
let idade;

nome = prompt("Qual é o seu nome ?")
idade = prompt("Qual é a sua idade ?")

if (idade >= 16) {
  console.log(nome + ", você já pode votar!")
} 
else {
  console.log(nome + ", você ainda não pode votar!")
}