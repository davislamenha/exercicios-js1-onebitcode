// FILA DE ESPERA
const cgBtn = document.querySelector('#cg-iniciar');

cgBtn.addEventListener('click', (e) => {
  e.preventDefault();
  iniciarPrograma();
});

function iniciarPrograma() {
  let opcao = '';
  let numero1 = 0;
  let numero2 = 0;
  let numero3 = 0;
  let area = 0;

  do {
    opcao = prompt(`
    Calculadora Geométrica

    Escolha uma das opções abaixo:
    1 - Área do triângulo
    2 - Área do retângulo
    3 - Área do quadrado
    4 - Área do trapézio
    5 - Área do círculo    
    6 - Sair
    `);
    switch (opcao) {
      case '1':
        numero1 = prompt('Digite a base do triângulo:');
        numero2 = prompt('Digite a altura do triângulo:');
        area = areaRetangulo(numero1, numero2) / 2;
        alert(`A área do triângulo é ${area}`);
        break;
      case '2':
        numero1 = prompt('Digite a base do retângulo:');
        numero2 = prompt('Digite a altura do retângulo:');
        area = areaRetangulo(numero1, numero2);
        alert(`A área do retângulo é ${area}`);
        break;
      case '3':
        numero1 = prompt('Digite o lado do quadrado:');
        area = areaQuadrado(numero1);
        alert(`A área do quadrado é ${area}`);
        break;
      case '4':
        numero1 = prompt('Digite a base maior do trapézio:');
        numero2 = prompt('Digite a base menor do trapézio:');
        numero3 = prompt('Digite a altura do trapézio:');
        area = areaTrapezio(numero2, numero1, numero3);
        alert(`A área do trapézio é ${area}`);
        break;
      case '5':
        numero1 = prompt('Digite o raio do círculo:');
        area = areaCirculo(numero1);
        alert(`A área do círculo é ${area}`);
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

function areaRetangulo(base, altura) {
  return +base * +altura;
}
function areaQuadrado(lado) {
  return +lado * +lado;
}
function areaTrapezio(baseMenor, baseMaior, altura) {
  return ((+baseMenor + +baseMaior) * +altura) / 2;
}
function areaCirculo(raio) {
  const pi = 3.14;
  return pi * (+raio * +raio);
}
