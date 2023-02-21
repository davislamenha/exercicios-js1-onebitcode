// FILA DE ESPERA
const feBtn = document.querySelector('#fe-iniciar');
let filaDeEspera = [];

feBtn.addEventListener('click', (e) => {
  e.preventDefault();
  iniciarFila();
});

function iniciarFila() {
  let opcao = '';
  let listaDePacientes = '';
  let novoPaciente = '';

  do {
    if (filaDeEspera.length > 0) {
      listaDePacientes = '';
      for (let i = 0; i < filaDeEspera.length; i++) {
        const paciente = filaDeEspera[i];
        listaDePacientes += `${i + 1}º ${paciente}\n`;
      }
    } else listaDePacientes = 'Não tem pacientes esperando no momento!';
    opcao = prompt(`
    Fila de Espera:
     \n${listaDePacientes}

      Escolha uma das opções abaixo:
      1 - Novo Paciente
      2 - Consultar Paciente
      3 - Sair
    `);
    switch (opcao) {
      case '1':
        novoPaciente = prompt(`
          Digite o nome do Novo Paciente: 
        `);
        filaDeEspera.push(novoPaciente);
        break;
      case '2':
        if (filaDeEspera.length > 0) {
          const pacienteConsultado = filaDeEspera.shift();
          alert(`${pacienteConsultado} foi consultado!`);
        } else alert('Não tem pacientes no momento!');
        break;

      default:
        break;
    }
  } while (opcao != '3');
}

// PILHA DE CARTAS
const pcBtn = document.querySelector('#pc-iniciar');
let pilhaDeCartas = [];

pcBtn.addEventListener('click', (e) => {
  e.preventDefault();
  iniciarPilhaDeCartas();
});

function iniciarPilhaDeCartas() {
  let opcao = '';
  let novaCarta = '';

  do {
    let quantidadeDeCartas = pilhaDeCartas.length;
    opcao = prompt(`
    Quantidade de Cartas na Pilha: ${quantidadeDeCartas}

      Escolha uma das opções abaixo:
      1 - Adicionar Carta
      2 - Puxar Carta
      3 - Sair
    `);
    switch (opcao) {
      case '1':
        do {
          novaCarta = prompt(`
            Digite o nome da carta:
          `);
        } while (novaCarta === null);
        pilhaDeCartas.push(novaCarta);
        break;
      case '2':
        if (pilhaDeCartas.length > 0) {
          const cartaPuxada = pilhaDeCartas.pop();
          alert(`Você puxou a carta ${cartaPuxada}.`);
        } else alert('Não tem cartas na pilha!');
        break;

      default:
        break;
    }
  } while (opcao != '3');
}
