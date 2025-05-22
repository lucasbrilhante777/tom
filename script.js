const estrelasContainer = document.querySelector('.estrelas');

// Criar estrelas aleatórias
const total = 100;
const estrelas = [];

for (let i = 0; i < total; i++) {
  const estrelas = document.createElement('div');
  estrelas.classList.add('estrela');
  estrelas.style.top = `${Math.random() * 100}%`;
  estrelas.style.left = `${Math.random() * 100}%`;
  estrelas.dataset.baseX = estrelas.style.left;
  estrelas.dataset.baseY = estrelas.style.top;
  estrelasContainer.appendChild(estrelas);
  estrelas.push(estrelas);
}

// Movimento com o mouse (efeito parallax leve)
document.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  estrelas.forEach((estrela, index) => {
    const offsetX = (clientX - centerX) * (index / total) * 0.02;
    const offsetY = (clientY - centerY) * (index / total) * 0.02;

    estrela.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });
});
