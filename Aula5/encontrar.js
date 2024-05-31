const clientes = require("./cliente.json");

//MODO1:
// function encontrar(lista, chave, valor){
//         return lista.find((item)=>item[chave] === valor);
// }
// const encontrado = encontrar(clientes, "nome", "Kirby");


//MODO2:
function encontrar(lista, chave, valor){
    return lista.find((item)=>item[chave].includes(valor));
}
const encontrado2 = encontrar(clientes, "telefone", "4775323087");
console.log(encontrado2);