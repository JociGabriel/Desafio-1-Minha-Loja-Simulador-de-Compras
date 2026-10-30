# ABACATECH – Loja de tecnologia com simulação de compra

- **Projeto:** Loja virtual de produtos tecnológicos com simulação de compra em JavaScript
- **Aluno:** Jocilfran Gabriel Gomes de França
- **Trilha:** Desenvolvimento Mobile

## Sobre a loja

A **ABACATECH** vende fones, relógios e acessórios de energia. O site tem várias telas: o cliente escolhe as quantidades, confere o resumo e confirma uma compra simulada (nenhum pagamento é feito).

| Produto | Descrição | Preço |
|---|---|---|
| Fone Pulse X | Fone Bluetooth com cancelamento de ruído e 30 h de bateria | R$ 199,90 |
| Smartwatch Orbit S2 | Relógio inteligente com monitor de passos, sono e notificações | R$ 349,90 |
| Carregador Volt 20K | Bateria portátil de 20.000 mAh com carga rápida | R$ 129,90 |

## Telas

| Arquivo | Função |
|---|---|
| `index.html` | Tela inicial, com a apresentação da loja e como funciona a simulação |
| `produtos.html` | Lista de produtos com botões + e − para escolher a quantidade |
| `carrinho.html` | Resumo com quantidade e valor de cada produto e o total |
| `sucesso.html` | Confirmação da compra simulada com o número do pedido |

## Estrutura

loja-tech/
├── index.html
├── produtos.html
├── carrinho.html
├── sucesso.html
├── style.css      (visual de todas as telas, tema claro e escuro)
├── dados.js       (banco de dados fictício: lista de produtos e preços)
├── script.js      (funções comuns: tema, carrinho, formatação em reais)
├── produtos.js    (lógica da tela de produtos)
├── carrinho.js    (lógica do resumo e confirmação)
├── sucesso.js     (lógica da tela final)
├── README.md
└── assets/

Os preços ficam somente em `dados.js`, e todas as telas usam essa lista. Assim os valores são sempre os mesmos em qualquer lugar.

## Tecnologias

- HTML5
- CSS3 (variáveis de cor, flexbox, tema escuro)
- JavaScript (`Number()`, funções, `localStorage` para guardar carrinho e tema)

## Como executar

1. Baixe ou clone o repositório.
2. Abra o arquivo `index.html` em qualquer navegador (não precisa de servidor).
3. Clique em **Ver produtos**, escolha as quantidades e clique em **Simular compra**.

## Testes realizados

| Teste | O que fazer | Resultado esperado | Resultado |
|---|---|---|---|
| Compra normal | 1 fone, 2 smartwatches e 1 carregador | Resumo com cada subtotal e total de R$ 1.029,60 | ☐ (marque após testar) |
| Um produto só | 3 smartwatches | Só o smartwatch aparece, total de R$ 1.049,70 | ☐ (marque após testar) |
| Nada selecionado | Abrir o resumo com tudo em 0 | "Nenhum produto foi selecionado." | ☐ (marque após testar) |
| Botão − | Apertar − com a quantidade em 0 | A quantidade continua 0, nunca fica negativa | ☐ (marque após testar) |
| Mudar tema | Clicar em "Mudar Tema" e trocar de tela | O tema escolhido continua nas outras telas | ☐ (marque após testar) |
| Confirmar compra | Clicar em "Confirmar compra" | Abre a tela de sucesso e o carrinho zera | ☐ (marque após testar) |

## Dificuldade e aprendizado

Como minha experiência principal de desenvolvimento é com **Flutter**, a transição para a Web vanilla (HTML, CSS e JavaScript) trouxe alguns desafios de adaptação, principalmente devido à diferença de paradigmas:

- **Separação de responsabilidades:** No Flutter, a interface e a estrutura são construídas em uma única árvore de widgets (*Widget Tree*), onde layout, estilo e comportamento ficam integrados. No desenvolvimento web, essa divisão em três arquivos distintos (HTML para estrutura, CSS para estilo e JavaScript para lógica) exigiu uma mudança no raciocínio.
- **Modelo de Layout (Flexbox vs. Widgets):** Para facilitar a transição, utilizei classes CSS com nomes familiares do Flutter — como `row`, `column` e `center`. Essa estratégia ajudou a mapear a estrutura visual de forma mais intuitiva.
- **Revisão de conceitos:** Por estar há cerca de dois anos sem praticar HTML, CSS e JavaScript, o processo de retomada exigiu pesquisa e prática para reaprender a sintaxe e a lógica de manipulação do DOM e `localStorage`.
- **Uso de Inteligência Artificial como suporte:** A IA atuou como ferramenta de apoio no aprendizado e desenvolvimento. Todas as ideias, divisões de telas e fluxos do projeto foram idealizados por mim, enquanto a IA auxiliou na tradução dessas ideias para o código, no esclarecimento da lógica em JavaScript e no ajuste dos layouts em CSS.