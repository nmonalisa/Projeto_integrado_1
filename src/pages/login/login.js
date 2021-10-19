function getPerfilUsuario(){
    const perfil_usuario = document.getElementById("login-select").value
    if (perfil_usuario != "Quem é você?") {
        perfil_usuario == 1 ? 
        window.location = "../perfil_empresa/empresa.html" : 
        window.location = "../perfil_posto/perfil_posto.html"
    }
}

function addClickEventListenerOnBtn(){
    document.getElementById("login-btn")
        .addEventListener("click", () => getPerfilUsuario())
}


//--- Ponto inicial da lógica: 
addClickEventListenerOnBtn()