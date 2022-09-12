class Interface {
    constructor(name, methods) {
        if(arguments.length != 2) {
            throw new Error("Interface chamada com " + arguments.length +
            "argumentos, mas 2 eram esperados.");
        }
        this.name = name;
        this.methods = [];
        for(let i=0; i < methods.length; i++) {
            if(typeof methods[i] !== 'string') {
                throw new Error("A Interface requer que os nomes dos métodos a serem passados sejam apenas em string.");
            }
            this.methods.push(methods[i]);
        }
    }
    static ensureImplements(object) {
        if(arguments.length < 2) {
            throw new Error("Função Interface.ensureImplements chamada com " +
            arguments.length + "argumentos, mas pelo menos 2 são esperados.");
        }
        for(var i=1; i < arguments.length; i++) {
            var interf = arguments[i];
            if(interf.constructor !== Interface) {
                throw new Error("Função Interface.ensureImplements requer dois ou mais argumentos"
                + "para serem instâncias da Interface.");
            }
            for(var j=0; j < interf.methods.length; j++) {
                var method = interf.methods[j];
                if(!object[method] || typeof object[method] !== 'function') {
                    throw new Error("Função Interface.ensureImplements: o objeto "
                    + "não implementa a interface " + interf.name
                    + " . Método " + method + " não encontrado.");
                }
            }
        }
    }
}
/* Cria a interface base Sanduíche. */
const Sanduiche = new Interface('Sanduiche', ['getDescricao', 'getCusto']); // Parâmetros: (Nome da interface, Métodos)
/* Classe FrangoAssado implementa a interface Sanduiche e instancia os objetos a serem decorados */
class FrangoAssado {
    constructor() {
        this.descricao = 'Sanduíche de frango assado'
        this.custo = 4.50
    }
    getDescricao() {
        return this.descricao;          
    }
    getCusto() {
        return this.custo;
    }
}
/* A classe SanduicheDecorator é usada aqui como uma superclasse para todos as classes decoradoras, todos os decoradores herdam dela. */
class SanduicheDecorator {
    constructor(sanduiche) {
        Interface.ensureImplements(sanduiche, Sanduiche);
        this.sanduiche = sanduiche;
    }
    getDescricao() {
        return this.sanduiche.getDescricao();
    }
    getCusto() {
        return this.sanduiche.getCusto();
    }
}
/* Classe Pepperoni estende a classe decoradora e adiciona novos comportamentos aos métodos do objeto Sanduiche */
class Pepperoni extends SanduicheDecorator {
    constructor(sanduiche) {
        super(sanduiche);
    }
    getDescricao() {
        return super.getDescricao() + ', adicionado Pepperoni';
    }
    getCusto() {
        return super.getCusto() + 0.99;
    }
}
/* Classe QueijoMussarelaRalado estende a classe decoradora e adiciona novos comportamentos aos métodos do objeto Sanduiche */
class QueijoMussarelaRalado extends SanduicheDecorator {
    constructor(sanduiche) {
        super(sanduiche);
    }
    getDescricao() {
        return super.getDescricao() + ', adicionado queijo mussarela ralado';
    }
    getCusto() {
        return super.getCusto() + 2.00;
    }
}
var sanduiche = new FrangoAssado();
console.log(sanduiche.getDescricao(), sanduiche.getCusto());
// Sanduíche de frango assado 4.5
sanduiche = new Pepperoni(sanduiche);   // decora com um ingrediente
console.log(sanduiche.getDescricao(), sanduiche.getCusto());
// Sanduíche de frango assado, adicionado Pepperoni 5.49
sanduiche = new QueijoMussarelaRalado(sanduiche);   // decora com o outro ingrediente
console.log(sanduiche.getDescricao(), sanduiche.getCusto());
// Sanduíche de frango assado, adicionado Pepperoni, adicionado queijo mussarela ralado 7.49