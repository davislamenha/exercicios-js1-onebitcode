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

// CALCULADORA

const calcForm = document.getElementById('calc-form');

calcForm.addEventListener('submit', (e) => {
  e.preventDefault();
  mostrarCalculo();
});

function calcularOperacao(operador) {
  const numero1Input = document.getElementById('calc-numero1');
  const numero2Input = document.getElementById('calc-numero2');
  const numero1 = parseFloat(numero1Input.value);
  const numero2 = parseFloat(numero2Input.value);
  const operacao = `${numero1} ${operador} ${numero2}`;
  return eval(operacao);
}

function mostrarCalculo() {
  const soma = document.querySelector('.soma');
  const subtracao = document.querySelector('.subtracao');
  const divisao = document.querySelector('.divisao');
  const multiplicacao = document.querySelector('.multiplicacao');

  soma.innerText = calcularOperacao('+');
  subtracao.innerText = calcularOperacao('-');
  divisao.innerText = calcularOperacao('/');
  multiplicacao.innerText = calcularOperacao('*');
}
