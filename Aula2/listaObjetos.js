const cliente = {
    nome: 'Joao',
    idade: 24,
    email: 'joão@google.com',
    telefone:['44 3241','44 3219 2211']   
}

cliente.enderecos = [
    {
    rua: 'R: Jose Mendes',
    numero: 1334,
    apartamento: true,
    complemento: 'ap 123'
},
];

cliente.enderecos.push({
    rua:'Guilhermino Augusto',
    numero: 413,
    apartamento: false
});

//exibindo apenas apartamentos
const listaApartamentos = cliente.enderecos.filter((endereco)=>endereco.apartamento ===true)

//exibindo apenas o objeto aninhado
console.log(listaApartamentos);