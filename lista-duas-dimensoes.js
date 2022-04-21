const alunos=['João', 'Juliana', 'Caio', 'Ana'];
const mediaDosAlunos = [10,7,9,6];

let listaDeNotasEAlunos = [alunos, mediaDosAlunos] //une-se duas listas em uma (lista de duas dimensões)

console.log(`${listaDeNotasEAlunos[0][0]}, sua média é ${listaDeNotasEAlunos[1][0]}`);//No caso pega-se o indice zero da array listaDeNotasEAlunos (que é a arry alunos) e depois pega-se o indice zero desta lista (João). Depois pega-se o primeiro elemento da array listaDeNotasEAlunos (mediaDosAlunos) e desta lista pega-se o indice zero (10)