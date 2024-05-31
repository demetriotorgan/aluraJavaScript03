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

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`)
    console.log(`Ligando para ${telefoneResidencial}`)
}

// ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);
ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    // endereco: cliente.endereco[0]
    ...cliente.endereco[0],
}

console.log(encomenda);