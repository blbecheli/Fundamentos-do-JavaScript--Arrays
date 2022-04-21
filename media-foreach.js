const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0


//callback
//foreach (para cada) é um método (função). No caso: Na array notas vai ser feito for each (para cada) em cada uma das nota internas (que é o parametro que designa cada elemento dentro da array e pode ter qualquer nome) a soma da let somaDasNotas com ela mesmo (por isso usa-se o +=) com o parametro nota, até que a array seja toda percorrida
notas.forEach(nota=>{
    somaDasNotas+=nota
})

let media = somaDasNotas / notas.length

console.log(media);

notas.forEach(nota => {console.log(nota);})