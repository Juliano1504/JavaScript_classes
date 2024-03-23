for(let i=0; i < 100; i++){
    console.log(`Número: ${i}`);
}

//Exemplo com arrays
let dias = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
];

for(let i = 0; i < dias.length; i++){
    console.log(`Dia ${dias[i]}`);
}

//Exemplo de for com in (for in)

for (let posicao in dias) {
    console.log(dias[posicao]);
}

//Imprimir numeros multiplos de 5

for(let i = 0; i <= 1000; i+=5){
    console.log(i);
}

