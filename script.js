// Funções usadas por todas as telas

// ---------- Tema ----------
function aplicarTema() {
    if (localStorage.getItem("tema") === "escuro") {
        document.body.classList.add("escuro");
    }
}

function mudarTema() {
    document.body.classList.toggle("escuro");
    if (document.body.classList.contains("escuro")) {
        localStorage.setItem("tema", "escuro");
    } else {
        localStorage.setItem("tema", "claro");
    }
}

// ---------- Formatação ----------
function formatarReais(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// ---------- Carrinho (guardado no navegador) ----------
// Formato: { "1": 2, "3": 1 }  ->  2 unidades do produto 1 e 1 do produto 3
function pegarCarrinho() {
    const salvo = localStorage.getItem("carrinho");
    if (salvo) {
        return JSON.parse(salvo);
    }
    return {};
}

function salvarCarrinho(carrinho) {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function alterarQuantidade(id, mudanca) {
    const carrinho = pegarCarrinho();
    let nova = Number(carrinho[id] || 0) + mudanca;
    if (nova < 0) {
        nova = 0;
    }
    carrinho[id] = nova;
    salvarCarrinho(carrinho);
    atualizarContador();
}

function contarItens() {
    const carrinho = pegarCarrinho();
    let quantidade = 0;
    for (let i = 0; i < produtos.length; i++) {
        quantidade += Number(carrinho[produtos[i].id] || 0);
    }
    return quantidade;
}

function calcularTotal() {
    const carrinho = pegarCarrinho();
    let total = 0;
    for (let i = 0; i < produtos.length; i++) {
        total += produtos[i].preco * Number(carrinho[produtos[i].id] || 0);
    }
    return total;
}

function atualizarContador() {
    const contador = document.getElementById("contador");
    if (contador) {
        contador.textContent = contarItens();
    }
}

// ---------- Ao abrir qualquer tela ----------
aplicarTema();
atualizarContador();

const btnTema = document.getElementById("btnTema");
btnTema.addEventListener("click", mudarTema);
