class Veiculo {
    constructor(modelo = 'n/a', marca = 'n/a', cor = 'n/a', numRodas = 0){
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.numRodas = numRodas;
    }
    
    represent() {
        return `modelo:${this.modelo}, marca:${this.marca}, cor:${this.cor}, numRodas:${this.numRodas}`;
    }

    clone() {
        let clone = new Veiculo();
        clone.modelo   = this.modelo;
        clone.marca    = this.marca;
        clone.cor      = this.cor;
        clone.numRodas = this.numRodas;
        return clone;
    }
}

class Pickup extends Veiculo {
    constructor(modelo = 'n/a', marca = 'n/a', cor = 'n/a', numRodas = 0, numPortas = 0, carga = 0){  
        super(modelo, marca, cor, numRodas);
        this.numPortas = numPortas;
        this.carga = carga;
    }

    represent(){
        return super.represent() + `, numPortas:${this.numPortas}, carga:${this.carga}`;
    }

    clone(){
        let clone_pickup = new Pickup();
        clone_pickup.modelo    = this.modelo;
        clone_pickup.marca     = this.marca;
        clone_pickup.cor       = this.cor;
        clone_pickup.numRodas  = this.numRodas;
        clone_pickup.numPortas = this.numPortas;
        clone_pickup.carga     = this.carga;
        return clone_pickup;
    }
}

class Van extends Veiculo {
    constructor(modelo = 'n/a', marca = 'n/a', cor = 'n/a', numRodas = 0, numLugares = 0){
        super(modelo, marca, cor, numRodas);
        this.numLugares = numLugares;
    }

    represent(){
        return super.represent() + `, numLugares:${this.numLugares}`;
    }

    clone(){
        let clone_van = new Van();
        clone_van.modelo     = this.modelo;
        clone_van.marca      = this.marca;
        clone_van.cor        = this.cor;
        clone_van.numRodas   = this.numRodas;
        clone_van.numLugares = this.numLugares;
        return clone_van;
    }
}

class Aplicacao {
    constructor(pickup, van){
        this.arrVeiculos = [];
        for(let i=0; i<3; i++){
            this.arrVeiculos[i] = pickup.clone();
        }
        for(let i=3; i<6; i++){
            this.arrVeiculos[i] = van.clone();
        }
    }
    returnArray(){
        let arrCopy = [];
        for(let i=0; i<6; i++){
            arrCopy[i] = this.arrVeiculos[i].clone();
        }
        return arrCopy;
    }
}

let prototipo_veiculo = new Veiculo();
console.log(prototipo_veiculo); // Veiculo { modelo: 'n/a', marca: 'n/a', cor: 'n/a', numRodas: 0 }
let van = new Van('Transit', 'Ford', 'branco', 4, 19);
console.log(van.represent()); // modelo:Transit, marca:Ford, cor:branco, numRodas:4, numLugares:19
let pickup = new Pickup('F-1000', 'Ford', 'vermelho', 4, 2, 2000);
console.log(pickup.represent()); // modelo:F-1000, marca:Ford, cor:vermelho, numRodas:4, numPortas:2, carga:2000
let a = new Aplicacao(van, pickup); // cria uma instância de Aplicacao, que é um array de 6 elementos de objetos Van e Pickup
b = a.returnArray(); // returnArray retorna um array de clones do objeto a

for(let x of b){
    console.log(x.represent());
}
/*  
    print do array retornado (b):
    modelo:Transit, marca:Ford, cor:branco, numRodas:4, numLugares:19
    modelo:Transit, marca:Ford, cor:branco, numRodas:4, numLugares:19
    modelo:Transit, marca:Ford, cor:branco, numRodas:4, numLugares:19
    modelo:F-1000, marca:Ford, cor:vermelho, numRodas:4, numPortas:2, carga:2000
    modelo:F-1000, marca:Ford, cor:vermelho, numRodas:4, numPortas:2, carga:2000
    modelo:F-1000, marca:Ford, cor:vermelho, numRodas:4, numPortas:2, carga:2000
*/