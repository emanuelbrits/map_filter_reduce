import prompt from "prompt-sync";
const input = prompt()
import {criar_matriz_2d} from "./functions_utils.js"

function main(){

    const qtd = Number(input('quantidade: '))

    const vetor = criar_matriz_2d(qtd).flat().reduce((acumulador, valor_atual) => {
      if(acumulador[valor_atual]) {
        acumulador[valor_atual] += 1;
      } else {
        acumulador[valor_atual] = 1;
      }
      return acumulador;
    }, {})

    console.log(vetor)
}

main()