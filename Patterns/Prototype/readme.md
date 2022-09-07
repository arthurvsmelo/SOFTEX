# Exercício de padrão de projeto prototype.

Crie uma fábrica de veículos utilizando o padrão Prototype com base no exemplo apresentado no Hipertexto 2. Os requisitos do projeto devem ser:

    1. implemente uma classe abstrata Veículo com um construtor padrão e os métodos clone e represent;

    2. o construtor da classe Veículo deve receber modelo, marca, cor e numeroRodas como parâmetros;

    3. crie pelo menos duas subclasses da classe Veículo, que acrescentem um ou mais atributos, por exemplo: carro que tem dois campos a mais, como numeroRodas e numeroPortas;

    4. desenvolva uma classe Aplicação que deve criar um array com seis veículos com dois tipos de veículos diferentes (subclasses), utilizando o método clone dos objetos para preencher o array;

    5. na classe Aplicação, implemente um método que retorne um array com o mesmo tamanho do array de veículos, onde cada elemento deve ser um clone dos elementos do array veículos;

    6. no final, deve imprimir na tela o retorno da função represent de cada elemento desse novo array de clones de veículos.

Em Javascript, todo objeto instanciado de uma classe herda os atributos e valores definidos na classe. Basta definirmos os atributos iniciais no construtor para termos os protótipos de cada objeto instanciado.

Tanto a classe pai **Veiculo** quanto as subclasses **Van** e **Pickup** possuem protótipos (caso não seja passado nenhum atributo na instância) e métodos **represent()** e **clone()**, que exibem e clonam os atributos do objeto passado como parâmetro, respectivamente.