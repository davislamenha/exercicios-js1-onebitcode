// TESTE DE VELOCIDADE
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

// CALCULADORA DE DANOS
const calcForm = document.getElementById('calc-form');

calcForm.addEventListener('submit', (e) => {
  e.preventDefault();
  mostrarInfo();
});

function mostrarInfo() {
  const nomePersonagem1 = document.getElementById('calc-nome1').value;
  const nomePersonagem2 = document.getElementById('calc-nome2').value;
  const ataquePersonagem1 = parseFloat(
    document.getElementById('calc-ataque1').value,
  );
  const defesaPersonagem2 = parseFloat(
    document.getElementById('calc-defesa2').value,
  );
  const escudoPersonagem2 = document.getElementById('calc-escudo2').checked;
  const escudo = escudoPersonagem2 ? 'Possui escudo!' : 'Não possui escudo!';
  const dano = calcularDano();
  const vida = sofrerDano();
  const resultado =
    vida > 0
      ? `${nomePersonagem2} sobreviveu ao ataque!`
      : `${nomePersonagem2} não sobreviveu ao ataque!`;

  const h3Personagem1 = document.querySelector('.nome1');
  const spanAtaque = document.querySelector('.ataque1');
  const spanDanoCausado = document.querySelector('.dano1');
  const h3Personagem2 = document.querySelector('.nome2');
  const spanVida = document.querySelector('.vida2');
  const spanDefesa = document.querySelector('.defesa2');
  const spanEscudo = document.querySelector('.escudo2');
  const spanResultado = document.querySelector('.resultado');

  h3Personagem1.innerHTML = nomePersonagem1;
  spanAtaque.innerHTML = ataquePersonagem1;
  spanDanoCausado.innerHTML = dano;

  h3Personagem2.innerHTML = nomePersonagem2;
  spanVida.innerHTML = vida;
  spanDefesa.innerHTML = defesaPersonagem2;
  spanEscudo.innerHTML = escudo;

  spanResultado.innerHTML = resultado;
}

function sofrerDano() {
  const vidaPersonagem2 = parseFloat(
    document.getElementById('calc-vida2').value,
  );
  const dano = calcularDano();
  const vida = vidaPersonagem2 < dano ? 0 : vidaPersonagem2 - dano;
  return vida;
}

function calcularDano() {
  const ataquePersonagem1 = parseFloat(
    document.getElementById('calc-ataque1').value,
  );
  const defesaPersonagem2 = parseFloat(
    document.getElementById('calc-defesa2').value,
  );
  const escudoPersonagem2 = document.getElementById('calc-escudo2').checked;

  if (ataquePersonagem1 > defesaPersonagem2 && !escudoPersonagem2) {
    return ataquePersonagem1 - defesaPersonagem2;
  } else if (ataquePersonagem1 > defesaPersonagem2 && escudoPersonagem2) {
    return (ataquePersonagem1 - defesaPersonagem2) / 2;
  } else return 0;
}
