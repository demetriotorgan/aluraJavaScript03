const cliente = {
    nome: 'Joao',
    idade: 24,
    email: 'joão@google.com',
    telefone:['44 3241','44 3219 2211']   
}

cliente.endereco = [{
    rua: 'R: Jose Mendes',
    numero: 1334,
    apartamento: true,
    complemento: 'ap 123'
},];

const chavesDoObjeto = Object.keys(cliente);

//verificando se o objeto possui a chave endereco
if (!chavesDoObjeto.includes("endereco")){
    console.error("Erro. É necessário ter um endereço cadastrado");
}