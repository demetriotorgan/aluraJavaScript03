const cliente = {
    nome: "Jose",
    idade:33,
    email: "jose@email.com",
    telefones: ["+550033338888", "+550033334444"]
   }
    cliente.animalEstimacao = [{
    nome: "Kripto",
    raca: "Cão",
    vacinado: true
   }]
    cliente.animalEstimacao.push({
    nome: "Lex",
    raca: "Gato",
    vacinado: false
   })

   //exibindo valores do array add
   console.log(cliente.animalEstimacao[1].nome);

   const animalEstimacao = cliente.animalEstimacao.filter(animalEstimacao=>animalEstimacao.raca === 'Cão');