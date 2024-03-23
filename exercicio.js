/* const prompt = require("prompt-sync")()
let total = 0;
let numero = 0;

for(let i = 0; i < 1000; i = total){
    numero = parseInt(prompt("Escreva um número: "))
    console.log(`Número: ${numero} + ${total}`);
    total = total + numero
    console.log(`Total: ${total}`);
}

console.log(`A soma dos números é: ${total}`); */


let nomes = [
"Juliano",
"Carlos",
"Miguel",
"Pablo",
"Marcelo"
];

let idades = [ 
18, 27, 34, 15, 43
];

for (pos in nomes){
    console.log(`Pessoa: ${nomes[pos]} Idade: ${idades[pos]}`);
}





