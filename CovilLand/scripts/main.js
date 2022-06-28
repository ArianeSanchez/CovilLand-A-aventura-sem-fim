const paulo = document.querySelector('.paulo');
const jean = document.querySelector('.jean');
const pikachu = document.querySelector('.pikachu');

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
    jean.getElementsByClassName.animation = 'none';
    jean.getElementsByClassName.left = `${jeanPosition}px`;

    paulo.getElementsByClassName.animation = 'none';
    paulo.getElementsByClassName.bottom = `${pauloPosition}px`;

    paulo.src = './imagens/blockdorei.png';
    paulo.style.width = '175px';
    paulo.style.marginLeft = '150px';

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

    clearInterval(loop1);
  }
}, 10);

document.addEventListener('keydown', pulo);
