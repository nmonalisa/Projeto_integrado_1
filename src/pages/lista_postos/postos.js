import lista_postos_coleta from "./dados_fake.js";
import api_key from "../../utils/api_key.js"

// Carregar lista de postos do banco de dados:
// substituir nessa função os dados locais fake pelos dados do BD
function loadData(){
    // ...lógica para pegar dados do bd
    return lista_postos_coleta.postos
}

// Percorrer lista de dados e criar card para cada posto de coleta
function carregarDadosNaTela(){
    const postos = loadData();
    if (postos.length != 0) {
        postos.map((posto, index) => inserirCardsNaTela(posto, index))
     }
}

// Inserir cards com infos dos postos no dom do html
function inserirCardsNaTela(posto, index){
    const container_cards = document.querySelector(".main-postos-box-cards")
    const new_card = document.createElement('div')
    new_card.innerHTML = criarCard(posto, index)
    container_cards.appendChild(new_card)
 }

// Retornar templade html dos cards
function criarCard(posto, index){
    return (
    `<div class="postos-card">
        <header class="postos-card-header">${posto.nome}</header>
            <div>${posto.endereco}</div>
            <div>Contato: ${posto.telefone}</div>
        <footer class="postos-card-click-btn" id='${index}'> ver no mapa </footer>
    </div>`)  
}

// Acrescentar escutador de eventos de clique nos botões "ver mapa" de cada card
function addClickEventListenerOnBtn(){
    const lista_btn = document.querySelectorAll(".postos-card-click-btn")
    if (lista_btn.length != 0){
        lista_btn.forEach((btn) => btn.addEventListener("click", (e) => infosCardClicado(e)))
    }
}

//---- Atualizações no mapa
function infosCardClicado(e){
    const num_card = e.target.id
    const dados = loadData()
    const endereco = dados[num_card].endereco
    atualizarMapa(endereco)
}

function removerMapaOriginal(){
    const container = document.querySelector(".mapa-box")
    const mapa_atual = document.querySelector(".iframe-maps")
    container.removeChild(mapa_atual)
}

function atualizarMapa(endereco){
    const container = document.querySelector(".mapa-box")
    const novo_mapa = document.createElement('iframe')
    novo_mapa.setAttribute("class", "iframe-maps")
    novo_mapa.src = `https://www.google.com/maps/embed/v1/place?key=${api_key.maps}&q=${endereco}`
    removerMapaOriginal()
    container.appendChild(novo_mapa)
}


//--- Ponto inicial da lógica: 
carregarDadosNaTela()
addClickEventListenerOnBtn()
