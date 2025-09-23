function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function checkAnswer(resposta, correta) {
    const resultado = document.getElementById('resultado');
    if (correta) {
        resultado.innerHTML = 'Você conhece bem o Raí!';
        resultado.style.color = '#4CAF50';
        if (resposta === 'Ser verdadeiro') {
            document.getElementById('q2').style.display = 'block';
            document.getElementById('btn95').style.display = 'inline';
            document.getElementById('btn80').style.display = 'inline';
        }
    } else {
        resultado.innerHTML = 'Ops! Tente de novo';
        resultado.style.color = '#ff6b6b';
    }
}

window.onload = function () {
    const fases = document.querySelectorAll('.fase');
    fases.forEach((fase, index) => {
        fase.style.animationDelay = `${index * 0.2}s`;
    });
};