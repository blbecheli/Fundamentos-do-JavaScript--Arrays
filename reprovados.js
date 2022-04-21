const nomes = ['Ana','Marcos','Maria','Mauro']
const notas = [7,4.5,8,7.5]

//filter = retorna true ou false
//Método filter exige que um dos parametros seja uma função. No caso: 1) Cria-se uma const (reprovados) que irá salvar a nova array que atende os critérios definidos a frente. 2)Como eu quero o nome dos alunos eu uso o método filter na array nomes (nomes.filter).3) Uso dois parametros-O primeiro (aluno, mas pode ser qualquer nome) vai armazenar o dado da array (nome dos alunos) e o segundo (indice, mas pode ser qualquer nome) vai armazenar a posição dele na array (é importante pois com este dado ele vai comparar com a outra array). 4)Faço uma arrow function (método filter exige uma função).5)Aqui vou armazenar as notas que forem menores que 5, fazendo a comparação na array notas (os colchetes indicam a posição do elemento na Array notas)
const reprovados = nomes.filter((aluno, indice) => notas[indice]<5)
//console.log(`reprovados ${reprovados}`);

const nomes1 = ['Ana','Marcos','Maria','Mauro','Bruno','Renata','Robson', 'Cassia'];
const notas1 = [7,4.5,8,7.5,4,8,2,4.9];
const notas2 = [8,8,9,4,5,8,7,10];
const notas3 = [1,10,2,5,8,7,10,5];


const media4 = nomes1.map((nome,indice)=>(notas1[indice]+notas2[indice]+notas3[indice])/3)

const reprovados1 = nomes1.filter((nome,index)=> media4[index]<7)
const aprovados1 = nomes1.filter((nome, index)=>media4[index]>=7)

console.log("A nota de minima de aprovação tem que ser maior ou igual a 7");

for (i=0; i<nomes1.length; i++){
    console.log(`${nomes1[i]} a sua média foi ${Math.round(media4[i])}`);
}

console.log(`Os alunos ${reprovados1} não obtiveram a nota minima e assim estão REPROVADOS`);
console.log(`Os alunos ${aprovados1} obtiveram a nota minima e assim estão APROVADOS`);


