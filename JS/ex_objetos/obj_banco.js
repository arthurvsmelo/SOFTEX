function Banco(agencia, conta, saldo, tipo_de_conta){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
    this.tipo_de_conta = tipo_de_conta;
}
Banco.prototype = {
    constructor : Banco,
    busca_saldo : function(){
        return this.saldo;
    },
    deposito : function(valor){
        // depósitos só podem ser positivos
        if (valor > 0){
            this.saldo += valor;
            return true;
        }
        else return false;
    },
    saque : function(valor){
        // retorna false se o saldo estiver zerado ou o valor do saque for maior que o saldo
        if (!(this.saldo == 0 || this.saldo < valor)){
            this.saldo -= valor;
            return true;
        }
        else return false;
    },
    numero_da_conta : function(){
        return this.conta;
    }
}

let conta_fulano = new Banco(30, 555256, 5000, "conta corrente");
console.log(`Conta: ${conta_fulano.numero_da_conta()}, Agencia: ${conta_fulano.agencia}, Tipo: ${conta_fulano.tipo_de_conta}`);
console.log(`Saldo: ${conta_fulano.busca_saldo()}`);
console.log("---------------------------");
conta_fulano.deposito(1800);
conta_fulano.saque(500);
console.log(`Novo saldo: ${conta_fulano.busca_saldo()}`);