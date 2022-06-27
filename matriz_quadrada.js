import prompt from "prompt-sync";
const input = prompt()
import {criar_vetor, matriz_quadrada} from "./functions_utils.js"

function main(){

    /*const tamanho = Number(input('Tamanho: '))
    const matriz = criar_vetor(tamanho).map(num => Math.pow(num, 2))
    console.log(matriz)*/

    const tamanho = Number(input('Tamanho: '))

    const vetor = criar_vetor(tamanho)
    console.log(vetor)

    const quadrado = matriz_quadrada(tamanho, vetor)
    console.log(quadrado)
}

main()