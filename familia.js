import prompt from "prompt-sync";
const input = prompt()
import {pegar_nome_idade} from "./functions_utils.js"

function main(){

    const qtd = Number(input('Familiares: '))

    pegar_nome_idade(qtd)
}

main()