import prompt from "prompt-sync";
const input = prompt()
import {inicais} from "./functions_utils.js"

function main(){

    const nome = input('nome: ').split(" ")//.map(word => word[0]).join("")//

    console.log(nome)
    const abreviacao = inicais(nome)
    console.log(abreviacao)
}

main()