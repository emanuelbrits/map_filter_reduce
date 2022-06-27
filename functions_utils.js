import prompt from "prompt-sync"
const input = prompt()

export function criar_vetor(tamanho){

    const vetor = new Array(tamanho)

    for(let i = 0; i < vetor.length; i++){
        vetor[i] = Number(input("Valor: "))
    }

    return vetor
}

export function matriz_quadrada(tamanho, vetor){

    const quadrado = new Array(tamanho)

    for(let i = 0; i < quadrado.length; i++){
        quadrado[i] = Math.pow(vetor[i], 2)
    }

    return quadrado
}

export function somar_positivos(vetor){

    const postivos = []
    let resultado = 0

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] >= 0){
            postivos.push(vetor[i])
        }
    }

    for(let i = 0; i < postivos.length; i++){
        resultado+= postivos[i]
    }

    return resultado
}

export function media(vetor){

    let soma = 0

    for(let i = 0; i < vetor.length; i++){
        soma+= vetor[i]
    }

    const media = soma / vetor.length

    return media
}

export function mediana(vetor){

    let mediana_vetor = 0

    vetor.sort(function(a, b){
        if(a > b) return 1
        if(a < b) return -1
        return 0

    })

    if(eh_par(vetor.length)){

        mediana_vetor = vetor[(vetor.length / 2) - 1] + vetor[vetor.length / 2]
    }else{
        mediana_vetor = vetor[Math.trunc(vetor.length / 2)]
    }

    return mediana_vetor
}

function eh_par(valor){
    
    return valor % 2 === 0
}

export function inicais(nome){

    const abreviacao = []

    for(let i = 0; i < nome.length; i++){
        abreviacao.push(nome[i][0])
    }

    return abreviacao.join("")
}

export function pegar_nome_idade(qtd){

    let maior_idade = 0
    let menor_idade = 99999

    for(let i = 0; i < qtd; i++){
        const nome = input('Nome: ')
        const idade = Number(input('Idade: '))

        if(idade > maior_idade){
            maior_idade = idade
        }

        if(idade < menor_idade){
            menor_idade = idade
        }
    }

    const diferenca = maior_idade - menor_idade

    console.log(`${menor_idade}, ${maior_idade}, ${diferenca}`)
}

export function criar_matriz_2d(tamanho){

    const vetor = new Array(tamanho)

    for(let i = 0; i < vetor.length; i++){
        vetor[i] = new Array(3)
    }

    for(let i = 0; i < vetor.length; i++){
        for(let j = 0; j < vetor[i].length; j++){
            vetor[i][j] = (input(`Valores matriz ${i +1}: `))
        }
    }

    return vetor
}