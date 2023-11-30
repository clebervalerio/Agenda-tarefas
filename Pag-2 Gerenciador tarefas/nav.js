window.onload = function() {
    // Recupere o nome do usuário do localStorage
    var username = localStorage.getItem('loggedInUser');
  
    // Selecione o elemento que deve exibir o nome do usuário
    var usernameElement = document.querySelector('#username');
  
    // Defina o texto do elemento para o nome do usuário
    usernameElement.textContent = username;
  };
  