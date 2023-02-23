// FILA DE ESPERA
const cgBtn = document.querySelector('#cg-iniciar');

cgBtn.addEventListener('click', (e) => {
  e.preventDefault();
  iniciarPrograma();
});

function iniciarPrograma() {
  let opcao = '';

  do {
    opcao = exibirMenu();
    switch (opcao) {
      case '1':
        areaTriangulo();
        break;
      case '2':
        areaRetangulo();
        break;
      case '3':
        areaQuadrado();
        break;
      case '4':
        areaTrapezio();
        break;
      case '5':
        areaCirculo();
        break;
      case '6':
        alert('Encerrado programa...');
        break;

      default:
        alert('Opção inválida');
        break;
    }
  } while (opcao != '6');
}

function areaTriangulo() {
  const base = prompt('Digite a base do triângulo:');
  const altura = prompt('Digite a altura do triângulo:');
  const area = (+base * +altura) / 2;
  return alert(`A área do triângulo é ${area}`);
}

function areaRetangulo() {
  const base = prompt('Digite a base do retângulo:');
  const altura = prompt('Digite a altura do retângulo:');
  const area = +base * +altura;
  return alert(`A área do retângulo é ${area}`);
}
function areaQuadrado() {
  const lado = prompt('Digite o lado do quadrado:');
  const area = +lado * +lado;
  return alert(`A área do quadrado é ${area}`);
}
function areaTrapezio() {
  const baseMaior = prompt('Digite a base maior do trapézio:');
  const baseMenor = prompt('Digite a base menor do trapézio:');
  const altura = prompt('Digite a altura do trapézio:');
  const area = ((+baseMenor + +baseMaior) * +altura) / 2;
  return alert(`A área do trapézio é ${area}`);
}
function areaCirculo() {
  const pi = 3.14;
  const raio = prompt('Digite o raio do círculo:');
  const area = pi * (+raio * +raio);
  return alert(`A área do círculo é ${area}`);
}

function exibirMenu() {
  return prompt(`
  Calculadora Geométrica

  Escolha uma das opções abaixo:
  1 - Área do triângulo
  2 - Área do retângulo
  3 - Área do quadrado
  4 - Área do trapézio
  5 - Área do círculo    
  6 - Sair
  `);
}
