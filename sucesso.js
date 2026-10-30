// Tela final: confirma a compra simulada

const area = document.getElementById("mensagem");
const salvo = localStorage.getItem("pedido");

if (salvo) {
    const pedido = JSON.parse(salvo);
    area.innerHTML = `
        <div class="selo">✔</div>
        <h2>Compra simulada com sucesso!</h2>
        <p>Pedido <strong>#${pedido.numero}</strong></p>
        <p>${pedido.itens} item(ns) · Total: <strong>${formatarReais(pedido.total)}</strong></p>
        <p>Nenhum pagamento foi feito: isto é só uma simulação.</p>
        <a class="btn destaque" href="index.html">Voltar ao início</a>
    `;
} else {
    area.innerHTML = `
        <h2>Nenhum pedido encontrado</h2>
        <a class="btn destaque" href="produtos.html">Ver produtos</a>
    `;
}
