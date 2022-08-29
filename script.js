

// Função para validação de email

function validaForm() {
    var name =
        document.forms.RegForm.Assunto.value;
    var email =
        document.forms.RegForm.Email.value;
    var phone =
        document.forms.RegForm.Telefone.value;
    var what =
        document.forms.RegForm.Texto.value;
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  // validação de email
    var regName = /\d+$/g;                                    // validação do assunto
    if (name == "" || regName.test(name)) {
        alert("Por favor, entre com um assunto válido");
        name.focus();
        return false;
    }
    if(what == "") {
        alert("Escreva uma mensagem mais longa");
        what.focus();
        return false;
    }
     
    if (email == "" || !regEmail.test(email)) {
        alert("Por favor, digite um email válido");
        email.focus();
        return false;
    }
      
    if (phone == "") {
        alert("Por favor, digite um telefone válido.");
        phone.focus();
        return false;
    }

    return true;
}

// para os botões abrirem outra tab quando clicados

function openTab(url) {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    link.remove();
}