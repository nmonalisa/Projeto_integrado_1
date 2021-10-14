import dados from "../../utils/dados_fake/dados_coleta.js";

//-- Variáveis globais
const contador = document.querySelector(".perfil-posto-btnCont")


//-- Carregar informações iniciais na tela
function getIDPostoColeta(){
    // Lógica para conhecer o id do posto que está acessando o site
    // essa identificação deverá vir da página de login
    const fakeID = 12
    return fakeID
}

function getDadosColetaDoPosto(){
    const postoID = getIDPostoColeta()
    return dados.coleta.filter(posto => posto.id == postoID)
}

function atualizarContadorAtualNaTela(){
    const dados_coleta = getDadosColetaDoPosto()
    if (dados_coleta.length != 0){
        contador.innerHTML = dados_coleta[0].contador_atual
    }  
}

//-- Manipulação do contador de acordo com o click do usuário
function addClickEventListenerOnBtn(){
    document.querySelector(".perfil-posto-btnZ").addEventListener("click", () => zerarContador())
    document.querySelector(".perfil-posto-btnG").addEventListener("click", () => armazenarValorNoBanco())
    document.querySelectorAll(".btn-count").forEach((btn) => btn.addEventListener("click", (e) => alterarContadorAtual(e)))
}

function alterarContadorAtual(e){
    const tipo_btn = e.target.id
    let valor_atual = parseInt(contador.innerHTML)
    if (valor_atual != 0) {
        tipo_btn == "adicao" ? valor_atual += 1 : valor_atual -= 1;   
    } else tipo_btn == "adicao" ? valor_atual += 1 : valor_atual = 0;
    contador.innerHTML = valor_atual
}

function zerarContador(){
    contador.innerHTML = 0
}

function armazenarValorNoBanco(){
    const valor_atual = parseInt(contador.innerHTML)
    console.log(`Valor a ser armazenado no BD: ${valor_atual}`)
    // lógica para persistir dado alterado do contador atual
    // alert("Contador atualizado com sucesso!")    
}

//-- Ponto inicial da aplicação:
atualizarContadorAtualNaTela()
addClickEventListenerOnBtn()