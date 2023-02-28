// SISTEMA DE VAGAS DE EMPREGO
const sveBtn = document.querySelector('#sve-iniciar');
const listaVagas = [];

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
        listarVagas();
        break;
      case '2':
        criarVaga();
        break;
      case '3':
        visualizarVaga();
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

function listarVagas() {
  let lista = '';
  if (listaVagas.length) {
    for (let i = 0; i < listaVagas.length; i++) {
      const vaga = listaVagas[i];
      lista += `
      Id da Vaga: ${i}
      Nome da Vaga: ${vaga.nome}
      Candidatos Inscritos: ${vaga.candidatos.length}\n
    `;
    }
    return alert(lista);
  } else return alert('Sem vagas no momento!');
}

function criarVaga() {
  const nome = prompt(`Informe o nome da vaga:`);
  const descricao = prompt(`Informe a descrição da vaga:`);
  const dataLimite = prompt(`Informe o data limite da vaga:`);
  const confirmacao = confirm(`
  Confirme as informções da vaga:
  
  Nome da Vaga: ${nome}
  Descrição: ${descricao}
  Data Limite: ${dataLimite}
  `);
  if (confirmacao) {
    let vaga = { nome, descricao, dataLimite, candidatos: [] };
    listaVagas.push(vaga);
    return alert('Vaga registrada com Sucesso!');
  } else return alert('O registro da vaga foi cancelado!');
}

function visualizarVaga() {
  const id = prompt(`Informe o id da vaga:`);
  encontrarVagaId(id);
}

function inscreverCandidato() {
  const nome = prompt('Informe o nome do candidato:');
  const id = prompt('Informe o id da vaga:');
  if (encontrarVagaId(id)) {
    listaVagas[id].candidatos.push(nome);
    return alert(`Candidato ${nome} inscrito com sucesso!`);
  }
}

function encontrarVagaId(id) {
  if (listaVagas[id]) {
    const nomeCandidatos =
      listaVagas[id].candidatos.length === 0
        ? 'Nenhum candidato inscrito no momento!'
        : listaVagas[id].candidatos.toString().replaceAll(',', ', ');
    const confirmacao = confirm(`
    Deseja excluir esta vaga?
      
    Id da Vaga: ${id}
    Nome da Vaga: ${listaVagas[id].nome}
    Descrição: ${listaVagas[id].descricao}
    Data Limite: ${listaVagas[id].dataLimite}
    Candidatos Inscritos: ${listaVagas[id].candidatos.length}
    Nome dos Candidatos: ${nomeCandidatos}  
    `);
    if (confirmacao) {
      return id;
    } else return alert('Requisição cancelada!');
  } else return alert('Vaga não encontrada!');
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
