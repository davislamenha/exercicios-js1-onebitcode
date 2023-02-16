const cmForm = document.getElementById('cm-form');
const novaUnidade = document.getElementById('cm-unidade');
const metros = document.getElementById('cm-metros');

let medidaConvertida = 0;

cmForm.addEventListener('submit', (e) => {
  e.preventDefault();
  coverterMetros(novaUnidade.value);
  mostrarConversao();
});

function mostrarConversao() {
  const titulo = document.querySelector('.info-titulo');
  const resultado = document.querySelector('.resultado');

  titulo.innerHTML = `De metros (m) para ${novaUnidade.value}`;
  resultado.innerHTML = `${metros.value} metros (m) equivale a ${medidaConvertida} ${novaUnidade.value}`;
}

function coverterMetros(unidade) {
  switch (unidade) {
    case 'milímetros (mm)':
      medidaConvertida = 1000 * parseFloat(metros.value);
      break;
    case 'centímetros (cm)':
      medidaConvertida = 100 * parseFloat(metros.value);
      break;
    case 'decímetros (dm)':
      medidaConvertida = 10 * parseFloat(metros.value);
      break;
    case 'decâmetros (dam)':
      medidaConvertida = 10 / parseFloat(metros.value);
      break;
    case 'hectômetros (hm)':
      medidaConvertida = 100 / parseFloat(metros.value);
      break;
    case 'quilômetros (km)':
      medidaConvertida = 1000 / parseFloat(metros.value);
      break;
  }
}
