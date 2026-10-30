// Tela de resumo: mostra quantidade e valor de cada produto e o total

function mostrarResumo() {
    const area = document.getElementById("resumo");
    const botoes = document.getElementById("botoesResumo");
    const carrinho = pegarCarrinho();
    let html = "";

    for (let i = 0; i < produtos.length; i++) {
        const p = produtos[i];
        const quantidade = Number(carrinho[p.id] || 0);

        if (quantidade > 0) {
            html += `
                <div class="linha">
                    <span class="icone">${p.icone}</span>
                    <div class="info">
                        <strong>${p.nome}</strong>
                        <span>${quantidade} x ${formatarReais(p.preco)}</span>
                    </div>
                    <strong>${formatarReais(p.preco * quantidade)}</strong>
                </div>
            `;
        }
    }

    // Nenhum produto selecionado
    if (contarItens() === 0) {
        area.innerHTML = `
            <div class="vazio">
                <p>Nenhum produto foi selecionado.</p>
                <a class="btn destaque" href="produtos.html">Escolher produtos</a>
            </div>
        `;
        botoes.style.display = "none";
        return;
    }

    html += `
        <div class="linha total">
            <span>Total da compra</span>
            <strong>${formatarReais(calcularTotal())}</strong>
        </div>
    `;
    area.innerHTML = html;
}

function confirmarCompra() {
    const pedido = {
        numero: Math.floor(Math.random() * 9000) + 1000,
        itens: contarItens(),
        total: calcularTotal()
    };

    localStorage.setItem("pedido", JSON.stringify(pedido));
    salvarCarrinho({});
    window.location.href = "sucesso.html";
}

mostrarResumo();
