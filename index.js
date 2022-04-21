//map
const arrayNums = [1, 2, 3, 4];

function multiplica (numero){
    return numero*10
}

const multiplica10 = arrayNums.map(multiplica)

console.log(multiplica10);

//reduce
const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acum, atual) => atual + acum, 0)

console.log(soma)
