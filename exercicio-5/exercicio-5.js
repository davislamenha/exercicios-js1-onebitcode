// MENU INTERATIVO
const miBtn = document.querySelector('#mi-iniciar');

miBtn.addEventListener('click', (e) => {
  e.preventDefault();
  iniciarMenu();
});

function iniciarMenu() {
  let opcao = '';
  do {
    opcao = prompt(`
    Digite o numero da opção desejada: 

    1 - Opção 1
    2 - Opção 2
    3 - Opção 3
    4 - Opção 4
    5 - Encerrar
    `);
    if (opcao) alert(`Você escolheu a opção ${opcao}`);
  } while (opcao && opcao != '5');
  alert('O programa foi encerrado!');
}

// CONTROLE FINANCEIRO
const cfBtn = document.querySelector('#cf-iniciar');

cfBtn.addEventListener('click', (e) => {
  e.preventDefault();
  iniciarControleFinanceiro();
});

function iniciarControleFinanceiro() {
  let opcao = '';
  let dinheiro = 0;
  let saque = 0;
  let deposito = 0;
  do {
    dinheiro = parseFloat(prompt('Digite a quantidade inicial de dinheiro:'));
    if (isNaN(dinheiro)) alert(`Por favor, digite um numero para prosseguir.`);
  } while (isNaN(dinheiro));
  do {
    opcao = prompt(`
    Saldo: R$ ${dinheiro}  

    Selecione uma das opções:
    1 - Depositar dinheiro
    2 - Sacar dinheiro
    3 - Encerrar
    `);
    switch (opcao) {
      case '1':
        do {
          deposito = parseFloat(
            prompt('Digite a quantidade que deseja depositar:'),
          );
          if (isNaN(deposito))
            alert(`Por favor, digite um numero para prosseguir.`);
          else if (deposito <= 0)
            alert(`Você só pode depositar valores maiores que 0`);
        } while (isNaN(deposito) || deposito <= 0);
        dinheiro += deposito;
        break;
      case '2':
        do {
          saque = parseFloat(prompt('Digite a quantidade que deseja sacar:'));
          if (isNaN(saque))
            alert(`Por favor, digite um numero para prosseguir.`);
          else if (saque > dinheiro)
            alert(`
          Saldo: R$ ${dinheiro}

          Saldo insuficiente!`);
        } while (isNaN(saque) || saque > dinheiro);
        dinheiro -= saque;
        break;
      case '3':
        break;
      case null:
        break;

      default:
        alert('Digite uma opção válida!');
    }
  } while (opcao && opcao != '3');
  alert('O programa foi encerrado!');
}
