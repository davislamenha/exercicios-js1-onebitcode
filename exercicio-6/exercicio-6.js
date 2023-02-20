// ROBO DA TABUADA
const rtForm = document.getElementById('rt-form');

rtForm.addEventListener('submit', (e) => {
  e.preventDefault();
  mostrarTabuada();
});

function calcularTabuada(n) {
  let tabuada = '';
  for (let i = 1; i <= 20; i++) {
    let calculo = i * n;
    tabuada += `<p class="tabuada">${i} x ${n} = ${calculo}</p>`;
  }
  return tabuada;
}

function mostrarTabuada() {
  const numero = parseFloat(document.getElementById('rt-numero').value);
  const container = document.querySelector('.rt-info');
  const tabuada = calcularTabuada(numero);

  container.innerHTML = tabuada;
}

// PROCURANDO PALINDROMOS
const ppForm = document.getElementById('pp-form');
const palavra = document.getElementById('pp-palavra');

ppForm.addEventListener('submit', (e) => {
  e.preventDefault();
  mostrarResultado();
});

function inverterPalavra(palavra) {
  let invertida = '';
  for (let i = palavra.length; i > 0; i--) {
    invertida += palavra[i - 1];
  }
  return invertida;
}

function verificarPalindromo(palavra, palavraInvertida) {
  return palavra.toLowerCase() === palavraInvertida.toLowerCase()
    ? 'É um palíndromo!'
    : 'Não é um palíndromo!';
}

function mostrarResultado() {
  const p1 = document.querySelector('.palavra-1');
  const p2 = document.querySelector('.palavra-2');
  const resultado = document.querySelector('.resultado');

  const palavraInvertida = inverterPalavra(palavra.value);

  p1.innerHTML = palavra.value.toLowerCase();
  p2.innerHTML = palavraInvertida.toLowerCase();
  resultado.innerHTML = verificarPalindromo(palavra.value, palavraInvertida);
}
