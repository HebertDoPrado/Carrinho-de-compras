let valorFinal = 0
let valorTotal = document.getElementById('valor-total');
valorTotal.innerHTML = 'R$ 0' ;

limpar()
function adicionar(){
  //pegando os dados dos campos
  let produtoId = document.getElementById('produto').value;
  let nomeProduto = produtoId.split('-')[0];
  let precoProduto = produtoId.split('R$')[1];
  let quantidadeId = document.getElementById('quantidade').value
  let carrinhoId = document.getElementById('lista-produtos');
  //inpedindo que o produto seja colocado no carrinho caso não tiver a quantidade 
  if(quantidadeId == '' ){
      alert(`Preencha o campo quantidade`);
   }else if (quantidadeId <= 0){
      alert(`Não é permitido colocar 0 produtos no carrinho`)
     document.getElementById('quantidade').value = '';
     }else{
        //calculando a quantida mais o preco dos produtos 
        let valor = (quantidadeId * precoProduto);
      
        //adicionado os produtos no carrinho
        let produtoCarrinho = carrinhoId.querySelector('.carrinho__produtos__produto')
        produtoCarrinho.innerHTML += `<br><span class="texto-azul">${quantidadeId}x</span> ${nomeProduto} <span class="texto-azul">R$${valor}</span>`
        //valor final do produto do carrinho 
        valorFinal += valor;
        valorTotal.innerHTML = `R$ ${valorFinal}`
        //limpando o campo quantidade
        document.getElementById('quantidade').value = '';
    
      }

  }
  // função para limpar o carrinho 
  function limpar(){
    let carrinho = document.getElementById('lista-produtos');
    let carrinhoId = document.getElementById('lista-produtos');
    let produtoCarrinho = carrinhoId.querySelector('.carrinho__produtos__produto')
    produtoCarrinho.innerHTML = '';
    valorTotal.innerHTML = 'R$ 0' ;
    valorFinal = 0;
}