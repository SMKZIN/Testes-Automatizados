type Tdados = {

    nome: string,
    email: string,
    senha: string

}

const obrigatorio: Required<Tdados> = {
    
    nome : "Shaolin",
    email: "monge@gmail.com",
    senha: "1234"

}

export default function camposObrigatorios(dados: Tdados){

   const email = dados.email
   const nome = dados.nome
   const senha = dados.senha

        if(nome.trim() !== "" && email.trim() !== "" && senha.trim() !== ""){

           return true
        }

            return "Todos os campos são obrigatórios"

            


}

