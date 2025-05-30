function inverterTexto(str) {
    return str.split('').reverse().join('')
}
let frase = "Javascript"

let fraseinvertida = inverterTexto(frase);

console.log(fraseinvertida);
