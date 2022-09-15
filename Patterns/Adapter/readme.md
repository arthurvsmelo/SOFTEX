# Exercício Adapter Pattern
Crie um adaptador que permita que um objeto do tipo Pato seja usado como se fosse um objeto do tipo Galinha.

Siga o exemplo apresentado no Hipertexto 4 e crie as classes `AdaptadorPato` e `AdaptadorPatoDemo` para demonstrar o uso da classe `AdaptadorPato`.

Nesse exercício, apenas para fins de demontração do padrão, considerei que as classes `Pato` e `Galinha` já implementaram suas respectivas interfaces.

A classe `AdapatadorPato` herda os métodos de `Pato`, mas adapta esses métodos para serem compatíveis com os objetos `Galinha`. 

Assim, o objeto pato (não adaptado) tem os métodos nativos de `Pato` enquanto o objeto patoadaptado, quando se utiliza dos mesmos métodos, 'traduz' o método para o método de objetos `Galinha`.