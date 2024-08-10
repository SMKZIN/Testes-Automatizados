import lucroOuPrejuizo from "../src/exercicio-1"

describe("Testes de lucro/prejuizo", () => {

    test("Verificacao se teve lucro", () => {

        expect(lucroOuPrejuizo(340.0,300.0)).toEqual("O valor do lucro é: 40")
    })

    test("Verificacao se teve prejuizo", () => {

        expect(lucroOuPrejuizo(300.0, 340.0)).toBe("O valor do prejuízo é: -40")
    })

    test("Verificar se nao teve nem lucro e nem prejuizo", () => {

        expect(lucroOuPrejuizo(300.00, 300.0)).toBe("Venda a preço de custo")
    })
})