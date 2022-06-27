import prompt from "prompt-sync";
const input = prompt()
import {criar_vetor, somar_positivos} from "./functions_utils.js"

function main(){

    /*const tamanho = Number(input('Tamanho: '))
    const vetor = criar_vetor(tamanho).filter(num => num > 0).reduce((acumulado, valor_atual) => acumulado + valor_atual, 0)
    console.log(vetor)*/

    const tamanho = Number(input('Tamanho: '))

    const vetor = criar_vetor(tamanho)
    console.log(vetor)

    const soma = somar_positivos(vetor)
    console.log(soma)
}

main()