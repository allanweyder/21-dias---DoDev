let peso = prompt("Insira o seu peso")
let altura = prompt("Insira a sua altura")

imc = peso / (altura * altura)

if(imc < 18.5){
    console.log("Magreza")
}else if(imc >= 18.5 && imc <= 24.9){
    console.log("Normal")
}else if(imc = 24.9 && imc <= 30){
    console.log("Sobrepeso")
}else {
    console.log("Obesidade")
}

let idade = prompt("Insira a sua idade")
let anoAtual = 2025
let anoNasc = anoAtual - idade
console.log("Você nasceu no ano de " + anoNasc)

let anoVivido = anoNasc
let idadeAtual = 0

for (let anoVivido = anoNasc; anoVivido <= anoAtual; anoVivido++ ){
    console.log(anoVivido + " - "  +  idadeAtual + " anos de idade.") 
    idadeAtual++
}

do{
    let continuar = prompt("Deseja inserir os dados novamente? (s/n) ")
} while (continuar == s)