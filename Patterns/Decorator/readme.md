# Exercício de design pattern Decorator

Aplique o padrão de projeto decorator para criar um sanduíche de frango assado com pepperoni e queijo mussarela ralado. O projeto deve seguir os seguintes critérios:
- deve imprimir no console: Sanduíche de Carne, Bacon, QueijoMussarelaRalado custa $7,49.
- o sanduíche de frango assado custa $4,50.
- o ingrediente adicional pepperoni custa $0,99.
- o ingrediente adicional queijo mussarela ralado custa $2,00.
- crie as classes necessárias: FrangoAssado, Pepperoni e QueijoMussarelaRalado.

Javascript não dá suporte nativo a interfaces, mas podemos emular o comportamento de uma com a classe `Interface`.

Aqui, a classe `Interface` 'constrói' uma interface com o nome e métodos passados como parâmetro. Seu construtor assegura que um nome e ao menos um método sejam passados na criação de uma nova interface. Já o método estático `ensureImplements` verifica se o objeto passado como parâmetro implementa todos os métodos listados na interface, lançando um erro se não houver métodos ou se algum dos métodos não for implementado.

Com esse modelo, podemos criar a interface `Sanduiche`:
```const Sanduiche = new Interface('Sanduiche', ['getDescricao', 'getCusto']);```

A classe `FrangoAssado` implementa os métodos de `Sanduiche` e instancia os objetos a serem decorados.

A classe `SanduicheDecorator` funciona como uma superclasse, em que todas as classes decoradoras herdam dela. 
Faz a checagem da implementação dos métodos de `Sanduiche` para cada objeto e faz a chamada dos métodos iniciais.

As classes `Pepperoni` e `QueijoMussarelaRalado` são as classes decoradoras, que estendem `SanduicheDecorator` adicionando métodos particulares a
cada classe.