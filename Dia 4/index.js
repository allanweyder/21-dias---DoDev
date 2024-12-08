const temFome = prompt("Você está com fome? (sim ou não)")
const temDinheiro = prompt("Você tem dinheiro? (sim ou não)")
const restauranteAberto = prompt("O restaurante está aberto? (sim ou são)")

if(temFome === "não" || temDinheiro === "não") {
console.log("Hoje a janta será em casa");
} else if(temFome && temDinheiro && restauranteAberto === "sim") {
    console.log("Hoje a janta será no restaurante preferido!")
} else {
    console.log("Peça um delivery!")
}