// Seleciona o elemento com ID 'botao' e adiciona um evento de clique
document.getElementById('botao').addEventListener('click', function () {
    // Seleciona o elemento com ID 'titulo' e armazena em uma constante
    const titulo = document.getElementById('titulo');
    
    // Altera o texto do elemento para 'Você clicou no botão!'
    titulo.textContent = 'Você clicou no botão!';
    
    // Muda a cor do texto para azul (hexadecimal #007BFF)
    titulo.style.color = '#007BFF';
});

