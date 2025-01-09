let nome = prompt("Insira o seu nome")
let idade = prompt("Insira a sua idade")
let salario = parseInt(prompt("Insira o seu salario"))
let confirmar = prompt("As informações estão corretas? (s/n)")

confirmar = "n"
while (confirmar != "s"){
    console.log("Nome: " + nome + "Idade: " + idade + " anos, Salário atual " + salario)
}

let aumento = 0.015
console.log("Previsão salárial para os próximo 10 anos:")

for (let ano = 1; ano <= 10; ano++) {
    salario += salario * aumento
    aumento *= 2
}

console.log((2025 + ano) + " = R$ " + salario)