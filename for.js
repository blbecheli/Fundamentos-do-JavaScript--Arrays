const numeros = [100, 200, 300, 400, 500, 600];

//Para o for: 1) Cria-se uma variável (por padrão é i). 2) Faz-se uma comparação para dizer até quando o loop vai ser repetido (i<numeros.length).3)No final soma-se um no valor de i, até a condição 2 ser atingida
for (let i = 0; i < numeros.length; i++) {
    console.log(i, numeros[i]);
}