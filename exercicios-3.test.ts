import camposObrigatorios from "../src/exercicio-3"

describe("Testes de campos obrigatórios", () => {

    test("Verifica sem tem todos os campos preenchidos" ,() => {

        expect(camposObrigatorios({
            nome: "Shaolin",
            email: "monge@gmail.com",
            senha: "1234"

        })).toBe(true)
    })

    test("Verifica sem o campo nome foi preenchidos" ,() => {

        expect(camposObrigatorios({
            nome: "",
            email: "monge@gmail.com",
            senha: "1234"
            
        })).toBe("Todos os campos são obrigatórios")
    })

    test("Verifica sem o campo email foi preenchidos" ,() => {

        expect(camposObrigatorios({
            nome: "Shaolin",
            email: "",
            senha: "1234"
            
        })).toBe("Todos os campos são obrigatórios")
    })

    test("Verifica sem o campo senha foi preenchidos" ,() => {

        expect(camposObrigatorios({
            nome: "Shaolin",
            email: "monge@gmail.com",
            senha: ""
            
        })).toBe("Todos os campos são obrigatórios")
    })

    test("Verifica se todos os campos  estao vazios" ,() => {

        expect(camposObrigatorios({
            nome: "",
            email: "",
            senha: ""
            
        })).toBe("Todos os campos são obrigatórios")
    })
})



    
