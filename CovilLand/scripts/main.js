const paulo = document.querySelector('.paulo');
const jean = document.querySelector('.jean');
const pikachu = document.querySelector('.pikachu');
const nuvem = document.querySelector('.nuvem');

const pulo = () => {
  paulo.classList.add('pulo');

  setTimeout(() => {
    paulo.classList.remove('pulo');
  }, 800);
};

const loop = setInterval(() => {
  const jeanPosition = jean.offsetLeft;
  const pikachuPosition = pikachu.offsetLeft;
  const pauloPosition = +window
    .getComputedStyle(paulo)
    .bottom.replace('px', '');

  if (jeanPosition <= 120 && jeanPosition > 0 && pauloPosition < 80) {
    nuvem.style.animationPlayState = 'paused';

    pikachu.style.animationPlayState = 'paused';

    jean.style.animationPlayState = 'paused';
    jean.getElementsByClassName.left = `${jeanPosition}px`;

    paulo.style.animationPlayState = 'paused';
    paulo.getElementsByClassName.bottom = `${pauloPosition}px`;

    paulo.src = './imagens/blockdorei.png';
    paulo.style.width = '175px';
    paulo.style.marginLeft = '150px';

    jean.style.display = 'none';
    pikachu.style.display = 'none';

    clearInterval(loop);
  }
}, 10);

const loop1 = setInterval(() => {
  const jeanPosition = jean.offsetLeft;
  const pikachuPosition = pikachu.offsetLeft;
  const pauloPosition = +window
    .getComputedStyle(paulo)
    .bottom.replace('px', '');

  if (pikachuPosition <= 120 && pikachuPosition > 0 && pauloPosition < 90) {
    pikachu.getElementsByClassName.animation = 'none';
    pikachu.getElementsByClassName.left = `${pikachuPosition}px`;

    paulo.getElementsByClassName.animation = 'none';
    paulo.getElementsByClassName.bottom = `${pauloPosition}px`;

    paulo.src = './imagens/pikachuladrao.png';
    paulo.style.width = '175px';
    paulo.style.marginLeft = '150px';

    jean.style.display = 'none';
    pikachu.style.display = 'none';
    clearInterval(loop1);
  }
}, 10);

document.addEventListener('keydown', pulo);
