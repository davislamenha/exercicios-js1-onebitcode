// MENU INTERATIVO
const miBtn = document.querySelector('#mi-iniciar');

miBtn.addEventListener('click', (e) => {
  e.preventDefault();
  iniciarMenu();
});

function iniciarMenu() {
  let opcao = '';
  do {
    opcao = prompt(
      'Digite o numero da opção desejada:\n' +
        '\n 1 - Opção 1' +
        '\n 2 - Opção 2' +
        '\n 3 - Opção 3' +
        '\n 4 - Opção 4' +
        '\n 5 - Encerrar',
    );
    if (opcao) alert(`Você escolheu a opção ${opcao}`);
  } while (opcao && opcao != '5');
  alert('O programa foi encerrado!');
}
