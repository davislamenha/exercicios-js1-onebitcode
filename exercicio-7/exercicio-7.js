// MENU INTERATIVO
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
