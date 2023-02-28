// SISTEMA DE VAGAS DE EMPREGO
const sveBtn = document.querySelector('#sve-iniciar');

sveBtn.addEventListener('click', (e) => {
  e.preventDefault();
  iniciarPrograma();
});

function iniciarPrograma() {
  let opcao = '';

  do {
    opcao = exibirMenu();
    switch (opcao) {
      case '1':
        break;
      case '2':
        break;
      case '3':
        break;
      case '4':
        break;
      case '5':
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

function exibirMenu() {
  return prompt(`
  Sistema de Vagas de Emprego

  Escolha uma das opções abaixo:
  1 - Listar vagas disponíveis
  2 - Criar um nova vaga
  3 - Visualizar uma vaga
  4 - Inscrever um candidato em uma vaga
  5 - Excluir uma vaga    
  6 - Sair
  `);
}
