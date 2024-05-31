const numerosPares = [2,4,6];
const numerosImpares = [1,3,5];

const numeros = [numerosPares,numerosImpares];
console.log(numeros);

//podemos usar o destructuer 
const numeros2 = [...numerosPares, ...numerosImpares];
console.log(numeros2);

//jogando o primeiro valor do array na primeira variável e o segundo valor na segunda variável
const [num1, num2] = [1,2];
console.log(num1, num2);

//caso eu acrescente mais valores posso adicionar em uma terceira variável
const [numero1, numero2, ...outrosValores] = [1,2,3,4,5,6];
console.log(numero1, numero2, outrosValores);

//adicionando um valor padrão a uma variável
//caso seja um array vazio atribui valor 'ju' a variável nome
const [nome='ju'] = [1];
console.log(nome);

//adicionando novas propriedades com spread operator a um objeto
const pessoa = {
    nome: 'Matheus',
    idade: 7
}
 
const pessoaComTelefone = {
    ...pessoa, telefone: 4432123
}

console.log(pessoaComTelefone);

//atribuindo valores de uma propriedade de um objeto a uma variável
const {idade} = pessoa
console.log()

//podemos retornar os valores de um objetos em um função
function imprimiDados(dados){
    const {nome, idade} =  dados
    console.log(nome, idade)
}
imprimiDados(pessoa);