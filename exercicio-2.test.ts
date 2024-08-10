import verificarSenha from "../src/exericio-2"

describe("Testes de senhas", () => {

    test("Teste para ver se a senha tem  4 caracteres", () => {

        expect(verificarSenha("1234")).toBe("SENHA VALIDA")
    })

    test("Teste para ver se a senha tem pelo menos 4 caracteres ", () => {

        expect(verificarSenha("123")).toBe("SENHA INVÁLIDA")
    })

    test("Teste para ver se a senha tem caracteres nao numericos", () => {

        expect(verificarSenha("123a")).toBe("SENHA INVÁLIDA")
    })

    test("Teste para ver se a senha tem caracteres especiais", () => {

        expect(verificarSenha("123@")).toBe("SENHA INVÁLIDA")
    })

    test("Teste para ver se a senha tem espaços", () => {

        expect(verificarSenha("12 34")).toBe("SENHA INVÁLIDA")
    })

    test("Teste para ver se a senha é vazia", () => {

        expect(verificarSenha("")).toBe("SENHA INVÁLIDA")
    })
})

    
