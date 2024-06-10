let totalDoCarrinho = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$0';

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeDoProduto = produto.split('-')[0];
    let valorUnitarioDoProduto = produto.split('R$')[1];
    let quantidadeDoProduto = document.getElementById('quantidade').value;
    let totalDoProduto = valorUnitarioDoProduto * quantidadeDoProduto;
    let carrinho = document.getElementById('lista-produtos');
    if (quantidadeDoProduto > 0) {
        carrinho.innerHTML =  carrinho.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidadeDoProduto}x</span> ${nomeDoProduto} <span class="texto-azul">R$${totalDoProduto}</span>
</section>`;
        totalDoCarrinho = totalDoCarrinho + totalDoProduto;
        let campoTotal = document.getElementById('valor-total');
        campoTotal.textContent = `R$${totalDoCarrinho}`;
        document.getElementById('quantidade').value = ''
    } else {
        alert('Insira uma quantidade válida!');
        return;
    } 
}

function limpar() {
    let confirmacaoLimpar = prompt(`Você tem certeza? Para confirmar, digite 'confirmar'`);
    if (confirmacaoLimpar == 'confirmar' || confirmacaoLimpar == 'Confirmar' || confirmacaoLimpar == 'CONFIRMAR') {
        document.getElementById('lista-produtos').innerHTML = '';
        document.getElementById('valor-total').textContent = 'R$0';
        totalDoCarrinho = 0;
    }
}