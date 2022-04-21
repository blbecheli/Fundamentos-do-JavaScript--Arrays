const notas = [10,9,8,7,6];


//map = Ele retorna um dado para a gente, que neste caso será uma nova Array
//O map também é um método callback, que faz uma iteração com todos os elementos da Array. No caso a array nova será chamada de notasAtualizadas. Pegou-se a array notas, fez-se um map nela e como parametro utilizou-se notam (cada elemento da array, pode ter qualquer nome). Após isso foi criada uma arrow funtion junto com um operador ternário (if simplificado), onde caso a nota seja igual a dez retorna-se a própria nota, caso não soma-se um a própria nota (o ++ foi colocado antes pois primeiro soma-se um e depois retorna-se a nota atualizada)
const notasAtualizadas = notas.map(nota =>nota == 10 ? nota : ++nota)

console.log(notasAtualizadas);