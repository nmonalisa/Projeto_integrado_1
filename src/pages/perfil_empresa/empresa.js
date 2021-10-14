import dados_coleta from "../../utils/dados_fake/dados_coleta.js";
console.log(dados_coleta)

// Carregar lista de postos do banco de dados:
// substituir nessa função os dados locais fake pelos dados do BD
function loadData(){
    // ...lógica para pegar dados do bd
    return dados_coleta.coleta
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
    const container_cards = document.querySelector(".main-empresa-boxCards")
    const new_card = document.createElement('div')
    new_card.innerHTML = criarCard(posto, index)
    container_cards.appendChild(new_card)
 }

 // Retornar templade html dos cards
function criarCard(posto, index){
    return (`
    <div class="empresa-card" data-key=${posto.id}>
        <div class="empresa-card-title">${posto.nome.toUpperCase()}</div>
        <div class="empresa-card-info">
            <div>Coleta</div>
            <div class="empresa-card-coleta">${posto.contador_atual}</div>
        </div>
        <div class="empresa-card-info">
            <div>Growlômetro</div>
            <div class="empresa-card-contador" id='cont${posto.id}'>${posto.growlometro}</div>
        </div>
        <div class="empresa-card-boxBtn">
            <button class="empresa-card-btnR">Reiniciar</button>
            <button class="empresa-card-btnDel">Excluir</button>  
        </div>
    </div>`)  
}

//-- Adicionar escutador de cliques aos botões reiniciar e excluir
function addClickEventListenerOnBtn(){
    document.querySelectorAll(".empresa-card-btnR").forEach((btn) => 
        btn.addEventListener("click", (e) => reiniciarGrowlometro(e)))

    document.querySelectorAll(".empresa-card-btnDel").forEach((btn) => 
        btn.addEventListener("click", (e) => apagarPostoColeta(e)))
}

//-- Ação de zerar growlômetro
function reiniciarGrowlometro(e){
    const posto_id = e.target.closest(".empresa-card").getAttribute("data-key")
    const contador = document.getElementById(`cont${posto_id}`)
    contador.innerHTML = 0
    // fazer:
    zerarGrowlometroNoBD(posto_id)               
}

function zerarGrowlometroNoBD(posto_id){
    console.log(`Zerar o growlometro do posto de coleta com id ${posto_id}`)
}

//-- Ação de apagar posto de coleta
function apagarPostoColeta(e){
    const posto_id = e.target.closest(".empresa-card").getAttribute("data-key")
    const card = e.target.closest(".empresa-card")
    card.remove()
    // fazer:
    apagarPostooNoBD(posto_id)      
}

function apagarPostooNoBD(posto_id){
    console.log(`Apagar posto de coleta com id ${posto_id}`)
}



//--- Ponto inicial da lógica: 
carregarDadosNaTela()
addClickEventListenerOnBtn()