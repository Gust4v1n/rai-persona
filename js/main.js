const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.width = Math.random() * 10 + 5 + 'px';
    particle.style.height = particle.style.width;
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = Math.random() * 3 + 4 + 's';
    particlesContainer.appendChild(particle);
}

window.onload = function () {
    const fases = document.querySelectorAll('.fase');
    fases.forEach((fase, index) => {
        fase.style.animationDelay = `${index * 0.15}s`;
    });
};

function checkAnswer(resposta, correta) {
    const resultado = document.getElementById('resultado');
    if (correta) {
        resultado.innerHTML = '✨ Você conhece bem o Raí! ✨';
        resultado.style.background = 'linear-gradient(135deg, #11998e, #38ef7d)';
        if (resposta === 'Ser verdadeiro') {
            document.getElementById('q2').style.display = 'block';
            document.getElementById('btn95').style.display = 'inline-block';
            document.getElementById('btn80').style.display = 'inline-block';
        }
    } else {
        resultado.innerHTML = '❌ Ops! Tente de novo';
        resultado.style.background = 'linear-gradient(135deg, #f093fb, #f5576c)';
    }
}