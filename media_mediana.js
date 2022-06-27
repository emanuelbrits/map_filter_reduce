import prompt from "prompt-sync";
const input = prompt()
import {criar_vetor, media, mediana} from "./functions_utils.js"

function main(){

    const tamanho = Number(input('Tamanho: '))

    const vetor = criar_vetor(tamanho)
    console.log(vetor)

    const media_vetor = media(vetor)
    console.log(`Média: ${media_vetor}`)

    const mediana_vetor = mediana(vetor)
    console.log(`Mediana: ${mediana_vetor}`)
}

main()