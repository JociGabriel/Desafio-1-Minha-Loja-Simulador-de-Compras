// Tela de produtos: mostra os cards e controla as quantidades

function mostrarProdutos() {
    const area = document.getElementById("listaProdutos");
    const carrinho = pegarCarrinho();
    let html = "";

    for (let i = 0; i < produtos.length; i++) {
        const p = produtos[i];
        const quantidade = Number(carrinho[p.id] || 0);

        html += `
            <div class="produto">
                <div class="foto">${p.icone}</div>
                <h2>${p.nome}</h2>
                <p>${p.descricao}</p>
                <p class="preco">${formatarReais(p.preco)}</p>
                <div class="quantidade">
                    <button class="btn-qtd" onclick="mudar(${p.id}, -1)" aria-label="Diminuir">−</button>
                    <span>${quantidade}</span>
                    <button class="btn-qtd" onclick="mudar(${p.id}, 1)" aria-label="Aumentar">+</button>
                </div>
            </div>
        `;
    }

    area.innerHTML = html;

    document.getElementById("barraResumo").textContent =
        contarItens() + " item(ns) · Total parcial: " + formatarReais(calcularTotal());
}

function mudar(id, mudanca) {
    alterarQuantidade(id, mudanca);
    mostrarProdutos();
}

mostrarProdutos();
