export default function verificarSenha(senha: string) {

        if(senha.length < 4){

            return "SENHA INVÁLIDA"
        }

        for(let TemNumero of senha){

            if(TemNumero < "0" || TemNumero > "9"){ 
        
                return "SENHA INVÁLIDA"
        
        }
       }
            return "SENHA VALIDA"
        
}    
    
       
