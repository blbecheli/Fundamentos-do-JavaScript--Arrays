const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0 //A variável foi criada fora do bloco de for, pois Se criarmos dentro do for, toda vez que nós passarmos por ele vamos criar uma nova variável e descartar o valor da variável antiga.

//O for, a cada iteração vai somando o valor da Array, em cada indice, na variável somaDasNotas (0+10 =10; 10+6.5 = 16.5; 16.5+8 = 24;5 ....)
for (let i = 0; i < notas.length; i++){
    somaDasNotas += notas[i]; //+=indica que eu estou somando somaDasNotas mais uam vez
}

let media = somaDasNotas / notas.length

console.log(media);