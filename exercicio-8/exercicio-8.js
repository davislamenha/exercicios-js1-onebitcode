// FILA DE ESPERA
const ciBtn = document.querySelector('#ci-iniciar');
let imoveis = [];

ciBtn.addEventListener('click', (e) => {
  e.preventDefault();
  iniciarPrograma();
});

function iniciarPrograma() {
  let opcao = '';

  do {
    let qtdImoveis = imoveis.length;
    opcao = prompt(`
    Quantidade de Imóveis: ${qtdImoveis}\n

    Escolha uma das opções abaixo:
    1 - Cadastrar Novo Imóvel
    2 - Consultar Imóveis
    3 - Sair
    `);
    switch (opcao) {
      case '1':
        const novoImovel = {};
        novoImovel.propietario = prompt(
          'Digite o nome do proprietário do imóvel:',
        );
        novoImovel.qtdQuartos = prompt(
          'Digite a quantidade de quartos do imóvel:',
        );
        novoImovel.qtdBanheiros = prompt(
          'Digite a quantidade de banheiros do imóvel:',
        );
        novoImovel.garagem = confirm(
          'Possui garagem? (Ok para sim/Cancelar para Não)',
        );
        novoImovel.garagem === true
          ? (novoImovel.garagem = 'Sim')
          : (novoImovel.garagem = 'Não');

        const salvar = confirm(
          `Deseja Salvar este imóvel? (Ok para sim/Cancelar para não)
            Proprietário: ${novoImovel.propietario}
            Quartos: ${novoImovel.qtdQuartos}
            Banheiros: ${novoImovel.qtdBanheiros}
            Garagem: ${novoImovel.garagem}
            `,
        );
        console.log(novoImovel);
        imoveis.push(novoImovel);
        break;
      case '2':
        let listaImoveis = '';
        for (let i = 0; i < imoveis.length; i++) {
          listaImoveis += `
          Imóvel ${i + 1}
          Proprietário: ${imoveis[i].propietario}
          Quartos: ${imoveis[i].qtdQuartos}
          Banheiros: ${imoveis[i].qtdBanheiros}
          Garagem: ${imoveis[i].garagem}\n          
          `;
        }
        alert(listaImoveis);
        break;
      case '3':
        alert('Encerrado programa...');
        break;

      default:
        alert('Opção inválida');
        break;
    }
  } while (opcao != '3');
}
