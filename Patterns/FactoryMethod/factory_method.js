// "interface" Server
class Server{
    constructor(config){
        this.type = 'Server',
        this.cpu = config.cpu,
        this.ram = config.ram,
        this.hd = config.hd
    }
}
// "interface" Pc
class Pc{
    constructor(config){
        this.type = 'PC',
        this.cpu = config.cpu,
        this.ram = config.ram,
        this.hd = config.hd
    }
}
// classe computerFactory: classe que fabrica objetos Pc ou Server de acordo com o tipo
class computerFactory{
    create = (type, config) => {
        let computer;
        switch(type){
            case 'Server':
                computer = new Server(config);
                break;
            case 'PC':
                computer = new Pc(config);
                break;
            default:
                console.log('Erro');
        }
        // getters
        computer.getType = () => {return computer.type}

        computer.getCpu = () => {return computer.cpu}

        computer.getRam = () => {return computer.ram}

        computer.getHd = () => {return computer.hd}
        // método toString retorna as informações de todos os atributos
        computer.toString = () => console.log(`Type: ${computer.type}, CPU: ${computer.cpu}GHz, RAM: ${computer.ram}GB, HD: ${computer.hd}GB.`)

        return computer;
    }
}
// instancia a classe factory
const comp = new computerFactory;
// utiliza a factory para criar um pc tipo server                               
const comp1 = comp.create('Server',{cpu:5, ram:64, hd:60000}); 
const comp2 = comp.create('PC',{cpu:3.6, ram:16, hd:1000});
console.log(comp1);
// print: 
/* Server {
    type: 'Server',
    cpu: 5,
    ram: 16,
    hd: 2000,
    getType: [Function: getType2],
    getCpu: [Function (anonymous)],
    getRam: [Function (anonymous)],
    getHd: [Function (anonymous)],
    toString: [Function (anonymous)]
}*/
console.log(comp1.getType());
// 'Server'
console.log(comp2.getType());
// 'PC'
console.log(comp1.getCpu());
// 5
console.log(comp2.getCpu());
// 3.6
console.log(comp1.getRam());
// 64
console.log(comp2.getRam());
// 16
console.log(comp1.getHd());
// 60000
console.log(comp2.getHd());
// 1000
comp1.toString();
// 'Type: Server, CPU: 5GHz, RAM: 64GB, HD: 60000GB.'
comp2.toString();
// 'Type: PC, CPU: 3.6GHz, RAM: 16GB, HD: 1000GB.'
console.log(comp1 instanceof computerFactory);
// false (o objeto não é instância da classe computerFactory, mas é objeto tipo Server)
console.log(comp1 instanceof Server);
// true (objeto tipo Server, mas quem instancia esse objeto é a classe computerFactory)
console.log(comp2 instanceof Pc);
// true (objeto tipo Pc, mas quem instancia esse objeto é a classe computerFactory)