class Strategy {
    execute() {

    }
}

class Calculadora extends Strategy{
    constructor(strategy) {
        super();
        this.strategy = strategy;
    }
    execute(a, b) {
        return strategy.executeOperation(a, b);
    }
}

class Soma extends Strategy {
    executeOperation(a, b) {
        return a + b;
    }
}

class Subtracao extends Strategy {
    executeOperation(a, b) {
        return a - b;
    }
}

class Multiplicacao extends Strategy { 
    executeOperation(a, b) {
        return a * b;
    }
}

alert('Calculadora.');
const a = Number.parseInt(prompt('Digite o primeiro número: '));
const b = Number.parseInt(prompt('Digite o segundo número: '));
const signal = prompt('Digite o sinal da operação (+ , - ou *): ');

switch (signal) {
    case '+':
        var strategy = new Soma();
        var calc = new Calculadora(strategy);
        alert(`${a} + ${b} = ${calc.execute(a, b)}`);
        console.log(`${a} + ${b} = ${calc.execute(a, b)}`);
        break;
    
    case '-':
        var strategy = new Subtracao();
        var calc = new Calculadora(strategy);
        alert(`${a} - ${b} = ${calc.execute(a, b)}`);
        console.log(`${a} - ${b} = ${calc.execute(a, b)}`);
        break;

    case '*':
        var strategy = new Multiplicacao();
        var calc = new Calculadora(strategy);
        alert(`${a} * ${b} = ${calc.execute(a, b)}`);
        console.log(`${a} * ${b} = ${calc.execute(a, b)}`);
        break;
}