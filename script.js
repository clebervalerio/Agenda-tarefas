function validarFormulario() {
    // Adiciona um evento de clique ao botão de login
    document.querySelector('input[type="submit"]').addEventListener('click', validarFormulario);
  
    // Verifica se o campo de e-mail está preenchido
    if (document.querySelector('input[name="email"]').value === '') {
      alert('O campo de e-mail deve ser preenchido.');
      return false;
    }
  
    // Verifica se o campo de senha está preenchido
    if (document.querySelector('input[name="password"]').value === '') {
      alert('O campo de senha deve ser preenchido.');
      return false;
    }
  
    // Validação de e-mail
    var email = document.querySelector('input[name="email"]').value;
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) {
      alert('O e-mail informado é inválido.');
      return false;
    }
  
    // Validação de senha
    var senha = document.querySelector('input[name="password"]').value;
    if (senha.length < 6) {
      alert('A senha deve ter pelo menos 6 caracteres.');
      return false;
    }
  
    // O formulário está válido, então podemos fazer a requisição HTTP
  
    // ...
}

window.onload = function() {
  validarFormulario();
}
