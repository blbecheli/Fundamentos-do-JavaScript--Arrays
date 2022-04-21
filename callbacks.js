const nomes = ['Ana', 'Ju', 'Leo', 'Paula'];

nomes.forEach(imprimeNomes) //foreach aceita uma função como parametro. No caso o parametro é a função imprimeNomes que tem como parametro nome

function imprimeNomes (nome){
    console.log(nome);
}