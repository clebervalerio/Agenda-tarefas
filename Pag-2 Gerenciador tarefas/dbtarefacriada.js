// Selecione o botão "Criar tarefa"
var botaoCriarTarefa = document.querySelector('.btn-success');

// Adicione um ouvinte de evento para o clique do botão
botaoCriarTarefa.addEventListener('click', function(event) {
  // Evite o comportamento padrão do botão
  event.preventDefault();

  // Obtenha o nome do usuário logado
  var username = localStorage.getItem('loggedInUser');

  // Obtenha os valores dos campos do formulário
  var tarefa = document.querySelector('#tarefa').value;
  var dataInicio = document.querySelector('#data-inicio').value;
  var horaInicio = document.querySelector('#hora-inicio').value;
  var dataTermino = document.querySelector('#data-termino').value;
  var horaTermino = document.querySelector('#hora-termino').value;
  var descricao = document.querySelector('#descricao').value;

  // Validação de entrada
  if (!tarefa || !dataInicio || !horaInicio || !dataTermino || !horaTermino || !descricao) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Crie um objeto de tarefa
  var task = {
    id: new Date().getTime(), // chave única para cada tarefa
    tarefa: tarefa,
    dataInicio: dataInicio,
    horaInicio: horaInicio,
    dataTermino: dataTermino,
    horaTermino: horaTermino,
    descricao: descricao,
    username: username
  };

  // Recupere as tarefas existentes
  var tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // Adicione a nova tarefa à lista de tarefas
  tasks.push(task);

  // Armazene a lista de tarefas no localStorage
  localStorage.setItem('tasks', JSON.stringify(tasks));

  // Mostre uma mensagem de sucesso
  alert('Tarefa criada com sucesso!');
});
