let mediaGeral = 0
let quantidadeHomens = 0
let quantMulheresAcimaDe7 = 0
let maiorNotaHomens = 0
let contador = 1

while(contador <= 10 ){
    nota = parseInt(prompt("Digite a nota do " + contador + "º aluno"))
    sexo = prompt("Digite o sexo do aluno (m/f)")

    if(sexo == "m") {
        if(nota > maiorNotaHomens) {
            maiorNotaHomens = nota
        }
        quantidadeHomens++ 
    }
   
    if (sexo == "f" && nota > 7){
        quantMulheresAcimaDe7++
    }

    mediaGeral += nota
    contador++
}

mediaGeral = mediaGeral / 10

console.log("A média geral dos alunos foi: " + mediaGeral)
console.log("A quantidade de homens cadastrados foi: " + quantidadeHomens)
console.log("A quantidade de mulheres que tiveram nota acima de 7 foi: " + quantMulheresAcimaDe7)
console.log("A maior nota entre os homens foi: " + maiorNotaHomens)