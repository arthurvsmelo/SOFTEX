const readline = require("readline-sync");
function calc(param1, param2, param3)
        {
            if (param3 == '+')
                console.log(`O resultado é: ${param1 + param2}`)
            else if (param3 == '-')
                console.log(`O resultado é: ${param1 - param2}`)
            else if (param3 == '*')
                console.log(`O resultado é: ${param1 * param2}`)
            else if (param3 == '/')
                if (param2 != 0)
                    console.log(`O resultado é: ${Math.floor(param1 / param2)} e resto ${param1 % param2}`)
                else console.log("Divisão por zero!")
            else if (param3 == '**')
                console.log(`O resultado é: ${param1 ** param2}`)  
        }
        let number_1 = 0
        let number_2 = 0
        let operator = ''
        number_1 = Number.parseInt(readline.questionInt("Digite o primeiro número: "))
        number_2 = Number.parseInt(readline.questionInt("Digite o segundo número: "))
        operator = readline.question("Digite a operação desejada (soma +, subtração -, multiplicação *, divisão / ou potência **): ")
        calc(number_1, number_2, operator)