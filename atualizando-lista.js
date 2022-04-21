const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Majorie', 'Leo'];

//listaDeChamada.splice(1,2,'Rodrigo') //splice é para retirar e colocar itens em uma array. Precisa de três parametros: o primeiro indica a partir de qual indice irá começar, o segundo indica quantos itens serão removidos após o inicio e o terceiro (facultativo) qual elemento será adicionado

listaDeChamada.splice(2,0, 'Rodrigo') //Quando o segundo parametro é zero indica que nenhum elemento será removido

console.log(`Lista de Chamada: ${listaDeChamada}`);