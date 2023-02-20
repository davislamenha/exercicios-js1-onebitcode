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
