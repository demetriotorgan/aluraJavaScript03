const cliente = {
    nome:'Andre',
    idade: 32,
    cpf: '123456',
    email: 'demetrio@gmail'
};

//usando o perador . para acessar as propriedades de um objeto
console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade}`);
console.log(`Os três primeiros digitos do CPF são ${cliente.cpf.substring(0,3)}`)