//Verificador de número

const prompt = require("prompt-sync")()
let numero = prompt("Escolha um número: ");

if(numero < 0){
    console.log("Seu número negativo");
} else if(numero == 0){
    console.log("Seu número é zero");
} else{
    console.log("Seu número é positivo");
}

//Ano bissexto

const prompt = require("prompt-sync")()
let ano = prompt("Escolha um número: ");
let resultadoAno = ano % 4

if(resultadoAno == 0){
    console.log("Ano bissexto");
} else{
    console.log("Ano normal");
} 


//Número par ou ímpar

for(let i = 1; i <= 1000; i++){
    console.log(i, (i % 2 == 0) ? 'Par' : 'Ímpar');
}
  

