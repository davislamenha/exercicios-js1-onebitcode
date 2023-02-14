// CADASTRO DE RECRUTAS
const crForm = document.getElementById('cr-form');

crForm.addEventListener('submit', (e) => {
  e.preventDefault();
  mostrarDados();
});

function mostrarDados() {
  const primeiroNome = document.getElementById('cr-primeiro-nome');
  const sobrenome = document.getElementById('cr-sobrenome');
  const NomeCompleto = primeiroNome.value + ' ' + sobrenome.value;
  const spanNome = document.querySelector('.nome-completo');
  spanNome.innerText = NomeCompleto;

  const CampoDeEstudo = document.getElementById('cr-estudo');
  const spanEstudo = document.querySelector('.campo-de-estudo');
  spanEstudo.innerText = CampoDeEstudo.value;

  const nascimento = document.getElementById('cr-nascimento');
  const spanIdade = document.querySelector('.idade');
  const idade = 2023 - parseFloat(nascimento.value);
  spanIdade.innerText = idade;
}
