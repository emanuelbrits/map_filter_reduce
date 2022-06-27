import prompt from "prompt-sync";
const input = prompt()

function main(){


    const numeronomio = (palavra) => palavra[0] + (palavra.length - 2) +  palavra[palavra.length - 1]

    const frase = input('Frase: ').split(' ').map(palavra => palavra.length >= 4 ? numeronomio(palavra) : palavra).join(' ')
    console.log(frase)
}

main()