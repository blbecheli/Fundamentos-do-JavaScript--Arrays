const salaJS = [7,8,8,7,10,6.5,4,10,7];
const salaJava = [6,5,8,9,5,6];
const salaPython = [7,3.5,8,9.5];

//reduce = reduz os valores de uma array para um único valor. Precisa de dois parametros: o primeiro é um acumulador e o segundo o valor atual do loop
//
function mediaSala(notasDaSala){ //notasDaSala é um parametro genérico que neste caso será substituido a frente pelo nome da sala (salaJS, salaJava, salaPython)
    const somaDasNotas = notasDaSala.reduce((acum, atual)=>
    atual + acum, 0) //atual é o valor de cada indice, o acum é o valor que vai somando a cada iteração e zero o valor inicial da iteração - os nomes dos parametros são exemplos, podem ser nomeados com qualquer nome)
    return somaDasNotas/notasDaSala.length
}

console.log(`Média da sala de JavaScript ${mediaSala(salaJS)}`);
console.log(`Média da sala de JavaScript ${mediaSala(salaJava)}`);
console.log(`Média da sala de JavaScript ${mediaSala(salaPython)}`);


const notas = [10, 6.5, 8, 7.5]

const media = notas.reduce((acum, atual)=> atual+acum,0)/notas.length 

console.log(media);