const tvForm = document.getElementById('tv-form');

tvForm.addEventListener('submit', (e) => {
  e.preventDefault();
  mostrarDados();
});

function mostrarDados() {
  const span = document.querySelector('.teste-info');
  span.innerHTML = compararVeiculos();
}

function compararVeiculos() {
  const nomeVeiculo1 = document.getElementById('tv-nome1').value;
  const velocidadeVeiculo1 = parseFloat(
    document.getElementById('tv-velocidade1').value,
  );
  const nomeVeiculo2 = document.getElementById('tv-nome2').value;
  const velocidadeVeiculo2 = parseFloat(
    document.getElementById('tv-velocidade2').value,
  );

  if (velocidadeVeiculo1 > velocidadeVeiculo2) {
    return `${nomeVeiculo1} é mais rápido!`;
  } else if (velocidadeVeiculo1 < velocidadeVeiculo2) {
    return `${nomeVeiculo2} é mais rápido!`;
  } else return `${nomeVeiculo1} e ${nomeVeiculo2} tem a mesma velocidade!`;
}
