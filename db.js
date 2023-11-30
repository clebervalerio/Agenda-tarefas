// Selecione o formulário de criação de conta
var formCriarConta = document.querySelector('#form-criar-conta');

// Adicione um ouvinte de evento para o envio do formulário
formCriarConta.addEventListener('submit', function(event) {
  // Evite o comportamento padrão do formulário
  event.preventDefault();

  // Obtenha os valores dos campos do formulário
  var name = formCriarConta.elements['name'].value;
  var email = formCriarConta.elements['email'].value;
  var password = formCriarConta.elements['password'].value;

  // Crie um objeto de usuário
  var user = {
    name: name,
    email: email,
    password: password
  };

  // Converta o objeto de usuário em uma string JSON
  var userString = JSON.stringify(user);

  // Armazene a string JSON no localStorage
  localStorage.setItem(email, userString);

  // Mostre uma mensagem de sucesso
  alert('Conta criada com sucesso! Faça login para continuar.');

  // Redirecione para a página de login
  window.location.href = 'index.html';
});

// Selecione o formulário de login
var formLogin = document.querySelector('#form-login');

// Adicione um ouvinte de evento para o envio do formulário
formLogin.addEventListener('submit', function(event) {
  // Evite o comportamento padrão do formulário
  event.preventDefault();

  // Obtenha os valores dos campos do formulário
  var email = formLogin.elements['email'].value;
  var password = formLogin.elements['password'].value;

  // Recupere o usuário do localStorage
  var userString = localStorage.getItem(email);

  // Verifique se o usuário existe
  if (userString) {
    // Converta a string JSON em um objeto
    var user = JSON.parse(userString);

    // Verifique se a senha está correta
    if (user.password === password) {
      // Armazene o nome do usuário no localStorage
      localStorage.setItem('loggedInUser', user.name);

      // Redirecione para a página 2
      window.location.href = '../Pag-2 Gerenciador tarefas/index.html';
    } else {
      // Mostre uma mensagem de erro
      alert('Senha incorreta. Tente novamente.');
    }
  } else {
    // Mostre uma mensagem de erro
    alert('Usuário não encontrado. Por favor, crie uma conta.');
  }
});
