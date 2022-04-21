const nomes = ["João", "Juliana", "Ana", "Caio", "Lara", "Marjories", "Guilherme", "Aline", "Fabiana", "Andre", "Carlos", "Paulo", "Bia", "Vivian", "Isabela", "Vinicíus", "Renan", "Renata", "Daisy", "Camilo"]

const sala1 = nomes.slice(0, nomes.length/2) //slice corta a array e tem dois parametros: o primeiro indica quando se inicia o corte e o segundo onde se termina (indice)
const sala2 = nomes.slice(nomes.length/2)//quando não coloco o segundo parametro ele vai até o final

console.log(`Tamanho da Arryay: ${nomes.length}`);
console.log(`Alunos da sala 1 ${sala1}`);
console.log(`Alunos da sala 1: ${sala1.length}`);
console.log(`Alunos da sala 2 ${sala2}`);
console.log(`Alunos da sala 2: ${sala2.length}`);