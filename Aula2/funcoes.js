const cliente = {
    nome: 'Joao',
    idade: 24,
    email: 'joão@google.com',
    telefone:['44 3241','44 3219 2211'],
    saldo: 200,
    efetuaPagamento: function(valor){
        if(valor > this.saldo){
            console.log("Saldo Insuficiente");
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado, novo saldo ${this.saldo}`)
        }
    }   
};

cliente.efetuaPagamento(25);
