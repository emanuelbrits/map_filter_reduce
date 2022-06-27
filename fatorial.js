import prompt from "prompt-sync";
const input = prompt()

function main(){

    const N = Number(input('Número: '))

    const fatorial = new Array(N).fill(null).map((valor_atual, index) => index + 1).reduce((acumulador, valor_atual) => acumulador * valor_atual)
    console.log(fatorial)
}

main()