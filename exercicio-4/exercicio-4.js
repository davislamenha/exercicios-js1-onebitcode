const vcForm = document.getElementById('vc-form');
let cidades = [];

vcForm.addEventListener('submit', (e) => {
  e.preventDefault();
  cidadesVisitadas();
  mostrarInfo();
});

function cidadesVisitadas() {
  while (confirm('Deseja informar alguma cidade que já visitou?')) {
    const cidade = prompt('Digite o nome da cidade:');
    if (!cidades.includes(cidade)) {
      cidades.push(cidade);
      alert(`${cidade} foi adicionada com sucesso`);
    } else {
      alert(`${cidade} já foi inserida, tente outra cidade!`);
    }
  }
}

function mostrarInfo() {
  const turista = document.getElementById('vc-turista').value;

  const turistaSpan = document.querySelector('.turista-info');
  const quantidadeSpan = document.querySelector('.quantidade-info');
  const cidadesSpan = document.querySelector('.cidades-info');

  turistaSpan.innerHTML = turista;
  quantidadeSpan.innerHTML = cidades.length;

  cidades.forEach((cidade) => {
    cidadesSpan.innerHTML += `${cidade} | `;
  });
}
