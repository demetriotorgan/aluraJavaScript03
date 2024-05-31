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

for (let chave in cliente){
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
}
