// Exemplo de script JavaScript para um site de aulas de português

// Função para exibir uma saudação personalizada
function exibirSaudacao() {
    var nome = prompt("Qual é o seu nome?");
    if (nome) {
        alert("Olá, " + nome + "! Bem-vindo ao site de aulas de português!");
    }
}

// Função para validar um formulário de contato
function validarFormularioContato() {
    var nomeContato = document.getElementById("nomeContato").value;
    var emailContato = document.getElementById("emailContato").value;

    if (!nomeContato || !emailContato) {
        alert("Por favor, preencha todos os campos do formulário de contato.");
        return false;
    }

    // Lógica adicional de validação, se necessário

    return true;
}

// Adicione mais funções conforme necessário

// Exemplo de chamada de função ao carregar a página
window.onload = function() {
    exibirSaudacao();
}
