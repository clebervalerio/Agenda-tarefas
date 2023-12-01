// Quando o documento estiver pronto
$(document).ready(function() {
    // Obtenha o nome do usuário logado
    var username = localStorage.getItem('loggedInUser');

    // Recupere as tarefas do localStorage
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Para cada tarefa
    tasks.forEach(function(task) {
        // Se a tarefa pertence ao usuário logado
        if (task.username === username) {
            // Crie uma nova linha de tabela
            var row = document.createElement('tr');

            // Crie uma nova célula para cada campo da tarefa
            var taskCell = document.createElement('td');
            var startCell = document.createElement('td');
            var endCell = document.createElement('td');
            var statusCell = document.createElement('td');
            var actionCell = document.createElement('td');

            // Preencha as células com os dados da tarefa
            taskCell.textContent = task.tarefa;
            startCell.textContent = task.dataInicio + ' às ' + task.horaInicio;
            endCell.textContent = task.dataTermino + ' às ' + task.horaTermino;
            statusCell.textContent = 'Em progresso'; // Substitua por uma chamada ao banco de dados para obter o status da tarefa
            actionCell.innerHTML = '<button class="btn btn-warning">Alterar</button>';

            // Adicione as células à linha
            row.appendChild(taskCell);
            row.appendChild(startCell);
            row.appendChild(endCell);
            row.appendChild(statusCell);
            row.appendChild(actionCell);

            // Adicione a linha à tabela
            document.querySelector('.table tbody').appendChild(row);
        }
    });
});
