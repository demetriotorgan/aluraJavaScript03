const pessoa = {
    nome:'Luma',
    profissao: 'Engenheira',
};
pessoa.telefone = '44 3245'
console.log(pessoa.telefone);

pessoa.nome = 'Luma Silva';
console.log(pessoa);

//usando a palavra reservada const podemos reatribuir valores para o objeto
//caso o objeto pessoa seja reescrito vai dar um erro
const novaPessoa ={
    nome: 'Pedro'
}
pessoa = novaPessoa;