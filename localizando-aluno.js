const alunos=['João', 'Juliana', 'Caio', 'Ana'];
const mediaDosAlunos = [10,7,9,6];

let listaDeNotasEAlunos = [alunos, mediaDosAlunos] //une-se duas listas em uma (lista de duas dimensões)

//No exemplo abaixo: 1) Cria-se uma função anonima (arrow function). 2)Utilizando-se o if verifica-se o parametro(nomeDoaluno) foi encontrado na array de indice zero (corresponde a alunos), utilizando-se o método includes. 3) Se verdadeiro criou-se uma variável que receberá como valor o indexof, que é o indice do aluno, valor procurado dentro da listaDenotasEAlunos. 4)O retorno (return) será o indice encontrado (nome do aluno-definido por indice), na Array alunos (por isso o indice zero), mais a sua nota (indice) dentro da mediaDosAlunos, ambos concatenados em listaDeNotasEAlunos. 5) Caso não localizado retorna mensagem de erro
const exibeNomeNota = (nomeDoAluno) => {
    if(listaDeNotasEAlunos[0].includes(nomeDoAluno)){ //includes faz uma busca na array e procura pelo parametro. Ele retorna verdadeiro ou falso
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno) //indexof retorna o indice procurado no parametro. Ele entra se o includes der verdadeiro
        return listaDeNotasEAlunos[0][indice] + ', sua média é '+ listaDeNotasEAlunos[1][indice]
    }else{
        return 'Aluno não está cadastrado'
    }
}

console.log(exibeNomeNota('Ana'));
console.log(exibeNomeNota('João'));
console.log(exibeNomeNota('Felipe'));

function notaMedia(nomeDoAluno){
    if(alunos.includes(nomeDoAluno)){
        let index = alunos.indexOf(nomeDoAluno)
        return alunos[index] + ', sua média é ' + mediaDosAlunos[index]
    }else{
       return "Esse vagabundo não estuda"
    }
}

console.log(notaMedia('Caio'));
console.log(notaMedia('Felipe'));