window.addEventListener('load', start);
console.log('Olá, mundo');

function start() {}

let banners = ['Os melhores do Brasil!', 'Qualidade e preço baixo!'];
let bannerAtual = 0;

function trocarBanner() {
  bannerAtual = (bannerAtual + 1) % 2;
  document.querySelector('h2#mensagem').textContent = banners[bannerAtual];
}

setInterval(trocarBanner, 3000);
