let nome = ""
let idade = 0
let altura = 0
let peso = 0

nome = prompt("Digite seu nome:")
idade = prompt("Digite sua idade:")
altura = prompt("Digite sua altura:")
peso = prompt("Digite seu peso")

let ano = 0
ano = 2024 - idade

let imc = 0
imc = peso / altura * altura

console.log("Olá " + nome + ", você tem " + idade + " anos, nasceu em " + ano + ", tem " + altura + " de altura e pesa " + peso + "kg. Seu IMC é " + imc + "Kg/m².S")

