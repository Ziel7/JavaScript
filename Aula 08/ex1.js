let nome;
let idade;

nome = prompt("Qual é o seu nome ?");
idade = prompt("Qual é a sua idade ?");

// Se idade for menor  0 ou for maior que 120: [nome], você digitou uma idade inválida!

if (idade < 0 || idade > 120) {
    console.log(nome + ", você digitou uma idade inválida!")
    
} else if (idade < 12) {
    console.log(nome + ", você é uma criança.");
} else if (idade >= 12 && idade <= 17) {
    console.log(nome + ", você é um adolescente.");
} else if (idade >= 18 && idade <= 59) {
    console.log(nome + ", você é um adulto.")
} else if (idade >= 60) {
    console.log(nome + ", você é um idoso.")
}