let nome = window.document.getElementById('nome')
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")

function validaNome(){

    let txt = document.querySelector("#txtNome")
    if(nome.value.length < 3 ){
        txt.innerHTML = "Nome inválido"
        txt.style.color = "red"
    } else {
        txt.innerHTML = "Nome válido"
        txt.style.color = "green"
    }
}

function validaEmail(){

    let txt = document.querySelector("#txtEmail")
    if(email.value.indexOf("@")== -1||email.value.indexOf(".")== -1){

        txt.innerHTML = "Email Inválido"
        txt.style.color = "red"

    } else {
        txt.innerHTML = "Email válido"
        txt.style.color = "green"
    }

}