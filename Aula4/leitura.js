//transforma o arquivo json em um objeto
const dados = require("./cliente.json");

console.log(dados.email);
console.log(typeof dados);

//buscando dados de lutador.json
const lutador = require("./lutador.json");
console.log(lutador.altura);

//transformando em string o objeto JSON
const clienteEmString = JSON.stringify(dados);
console.log(clienteEmString);
console.log(typeof clienteEmString);

//transformando a string json em objeto
const objetoCliente = JSON.parse(clienteEmString);
console.log(objetoCliente);