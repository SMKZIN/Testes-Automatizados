

export  default function lucroOuPrejuizo(Venda: number, Compra: number){
    
const lucroOuPejuizo = Venda - Compra
    
    if(Venda > Compra) {

        return `O valor do lucro é: ${lucroOuPejuizo}`

    } else if (Venda < Compra) {

        return `O valor do prejuízo é: ${lucroOuPejuizo}`

    }

        return "Venda a preço de custo"
}