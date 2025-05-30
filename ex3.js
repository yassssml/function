function maiorDeTres(a, b, c) {
    let numeros = [a, b, c];
    let i = 0;
    let maior = numeros[0];

    while(i < numeros.lenght) {
        if(numeros[i] > maior) {
            maior = numeros[i]
        }
        i++
  
     } console.log(maior);
    }

maiorDeTres(5, 9, 2)
console.log("------------------------")
maiorDeTres(-3, -7, -1)
