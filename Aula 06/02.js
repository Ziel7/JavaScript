let nome 
let av1
let av2
let media 

nome = prompt("Qual é o seu nome?")
av1 = Number(prompt("Digite o primeiro número"))
av2 = Number(prompt("Digite o segundo número"))

media = (av1 + av2) / 2

if (media >= 6) {
    console.log(nome + ", a sua média foi  de " + media + " e você foi aprovado(a)")
} else {
    console.log(nome + ", a sua média foi  de " + media + " e você foi reprovado(a)")
}