const cliente = {
    nome: 'Joao',
    idade: 24,
    email: 'joão@google.com',
    telefone:['44 3241','44 3219 2211']   
}

cliente.endereco = {
    rua: 'R: Jose Mendes',
    numero: 1334,
    apartamento: true,
    complemento: 'ap 123'
}

//exibindo apenas o objeto aninhado
console.log(cliente.endereco);