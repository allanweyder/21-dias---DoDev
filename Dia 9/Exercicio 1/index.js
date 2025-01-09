let nome = prompt("Insira o seu nome")
let idade = prompt("Insira a sua idade")
let peso = prompt("Insira o seu peso")
let altura = prompt("Insira a sua altura")
let profissão = prompt("Insira a sua profissão")

console.log("Olá " + nome + ", você tem " + idade + " anos, é " + profissão + ", tem " + altura + "M de altura e pesa " + peso + "kg.")

if(idade < 18){
    console.log("Sem gelada para você!")
}else {
    console.log("Está liberado para tomar umas geladas.")
}

let meses = idade / 12
let semanas = idade / 7
let dias = idade / 365

console.log("Sua idade em meses é: " + meses)
console.log("Sua idade em semanas é: " + semanas)
console.log("Sua idade em dias é: " + dias)