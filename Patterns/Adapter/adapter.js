class Pato {
    constructor(name){
        this.name = name;
    }
    fazerQuaQua(){
        console.log('Qua Qua');
    }
    voar(){
        console.log('Voando...');
    }
}

class Galinha {
    constructor(name){
        this.name = name;
    }
    fazerCocorico(){
        console.log('Cocoricó');
    }
    voar(){
        console.log('Voando...')
    }
}

class AdaptadorPato extends Pato {
    constructor(pato){
        super(pato.name);
    }
    fazerQuaQua(){
        console.log('Cocoricó');
    }
    voar(){
        console.log('Voando...')
    }
}

var pato = new Pato('patolino');
var patoadaptado = new AdaptadorPato(pato);
console.log(pato);                                      // Pato { name: 'patolino' }
console.log(pato instanceof Pato);                      // true
pato.fazerQuaQua();                                     // Qua Qua
console.log(patoadaptado);                              // AdaptadorPato { name: 'patolino' }
console.log(patoadaptado instanceof Pato);              // true
console.log(patoadaptado instanceof AdaptadorPato);     // true
patoadaptado.fazerQuaQua();                             // Cocoricó
patoadaptado.voar();                                    // Voando...