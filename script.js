// ========================================
// CONFIGURAÇÕES
// ========================================

// Nome casal
document.getElementById('coupleName').innerHTML =
`${CONFIG.nome1} & ${CONFIG.nome2} ❤️`;

// Texto surpresa
document.getElementById('surpriseText').innerHTML =
CONFIG.tituloSurpresa;

// Mensagem
document.getElementById('message').innerHTML =
CONFIG.mensagem;

// Música
document.getElementById('music').src =
CONFIG.musica;

// CORES
document.documentElement.style
.setProperty('--primary', CONFIG.corPrimaria);

document.documentElement.style
.setProperty('--secondary', CONFIG.corSecundaria);

// Data namoro
const dataNamoro =
new Date(CONFIG.dataNamoro);

// ========================================
// GALERIA
// ========================================

const gallery =
document.querySelector('.gallery');

CONFIG.fotos.forEach(foto => {

  const img = document.createElement('img');

  img.src = foto;

  gallery.appendChild(img);

});

// ========================================
// BOTÃO SURPRESA
// ========================================

const surpriseBtn =
document.getElementById('surpriseBtn');

const hiddenSections =
document.querySelectorAll('.hidden');

surpriseBtn.addEventListener('click', () => {

  // Mostrar seções
  hiddenSections.forEach((section, index) => {

    setTimeout(() => {

      section.classList.add('show');

    }, index * 400);

  });

  // Criar corações
  createHearts();

  // Scroll
  setTimeout(() => {

    document.getElementById('contador')
    .scrollIntoView({
      behavior:'smooth'
    });

  },800);

  // Remove botão
  surpriseBtn.style.display = 'none';

});

// ========================================
// CORAÇÕES
// ========================================

function createHearts(){

  for(let i = 0; i < 40; i++){

    const heart =
    document.createElement('div');

    heart.classList.add('heart');

    heart.innerHTML = '❤';

    heart.style.left =
    Math.random() * 100 + 'vw';

    heart.style.fontSize =
    (Math.random() * 25 + 10) + 'px';

    heart.style.animationDuration =
    (Math.random() * 10 + 5) + 's';

    document.body.appendChild(heart);
  }
}

// ========================================
// CONTADOR
// ========================================

function atualizarContador(){

  const agora = new Date();

  const diferenca = agora - dataNamoro;

  const dias = Math.floor(
    diferenca / (1000 * 60 * 60 * 24)
  );

  const horas = Math.floor(
    (diferenca / (1000 * 60 * 60)) % 24
  );

  const minutos = Math.floor(
    (diferenca / (1000 * 60)) % 60
  );

  const segundos = Math.floor(
    (diferenca / 1000) % 60
  );

  document.getElementById('dias').innerText =
  dias;

  document.getElementById('horas').innerText =
  horas;

  document.getElementById('minutos').innerText =
  minutos;

  document.getElementById('segundos').innerText =
  segundos;
}

setInterval(atualizarContador,1000);

atualizarContador();

// ========================================
// MÚSICA
// ========================================

function playMusic(){

  const music =
  document.getElementById('music');

  music.play();
}

// ========================================
// EXPLOSÃO FINAL
// ========================================

function explosion(){

  for(let i = 0; i < 100; i++){

    const heart =
    document.createElement('div');

    heart.innerHTML = '❤️';

    heart.style.position = 'fixed';

    heart.style.left =
    Math.random() * 100 + 'vw';

    heart.style.top = '100vh';

    heart.style.fontSize =
    (Math.random() * 30 + 10) + 'px';

    heart.style.zIndex = '9999';

    document.body.appendChild(heart);

    heart.animate([

      {
        transform:'translateY(0)',
        opacity:1
      },

      {
        transform:
        `translateY(-${window.innerHeight + 200}px)`,

        opacity:0
      }

    ],{

      duration:3000,

      easing:'ease-out'

    });

    setTimeout(() => {

      heart.remove();

    },3000);
  }
}