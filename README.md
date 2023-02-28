# EXERCÍCIOS DO MODULO DE JAVASCRIPT I

## ONE BIT CODE

> Exercícios para estudo e prática propostos no modulo de Javascript I (Lógica de Programação).

## Descrição dos Exercícios

### Exercício 1

#### Cadastro de Recrutas

- Escrever um programa em javascript que permita salvar informações de um recruta
- As informações a serem salvas são: primeiro nome, sobrenome, campo de estudo e ano de nascimento
- O programa deve exibir o nome completo do recruta, seu campo de estudo e sua idade

#### Calculadora de 4 Operações

- Escrever um programa em javascript que permita inserir dois valores numéricos
- Calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão)
- Após calcular os resultados o programa deve exibi-los na tela

### Exercício 2

#### Teste de Velocidade

- Escrever um programa em javascript que permita inserir o nome e a velocidade de dois veículos
- Exibir na tela uma mensagem dizendo qual dos dois é mais rápido

#### Calculadora de Dano

- Escrever um programa que permita inserir o nome e o poder de ataque de um personagem
- Inserir o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem, e se ele possui um escudo
- Calcule a quantidade de dano causado baseado nas regras informadas
- O programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor
- Exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens

### Exercício 3

#### Conversor de Medidas

- Escrever um programa em javascript que funcione como um conversor de medidas
- Pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido
- Converter a medida de acordo com a opção escolhida e exibir o resultado

### Exercício 4

#### Visitando Novas Cidades

- Escrever um programa em javascript que peça o nome de um turista
- Perguntar se ele já visitou alguma cidade
- Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável
- Continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não
- No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou

### Exercício 5

#### Menu Interativo

- Escrever um programa em javascript que simule um menu interativo com 5 opções diferentes
- As quatro primeiras não precisam de nenhuma funcionalidade específica, a última opção deve ser a opção “Encerrar”
- Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual foi a opção escolhida e depois o programa deve exibir novamente o menu com as 5 opções até que o usuário escolha a opção “Encerrar”
- Ao escolher a opção “Encerrar”, deve ser mostrada uma mensagem dizendo que o sistema está sendo encerrado, deve ser exibida na tela e então o programa é finalizado

#### Controle Financeiro

- Escrever um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível
- Mostrar na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair
- Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções
- A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor
- A opção de sair deve encerrar o programa

### Exercício 6

#### Robô da Tabuada

- Escrever um programa em javascript que seja capaz de calcular a tabuada de um determinado número de 1 a 20
- O programa deve começar pedindo o número a ser usado nos cálculos e então salvar todos os resultados de multiplicações de 1 a 20 usando o número informado dentro de uma variável do tipo string
- Depois o programa deve exibir esses resultados

#### Procurando Palíndromos

- Escrever um programa em javascript que seja capaz de identificar se uma palavra é um palíndromo
- O programa deve iniciar pedindo que seja informada uma palavra e então deve exibir uma mensagem dizendo se aquela palavra é ou não um palíndromo
- Caso não seja um palíndromo, o programa deve mostrar a palavra lida da esquerda para direita e da direita para esquerda

### Exercício 7

#### Fila de Espera

- Escrever um programa em javascript para simular uma fila de espera em um consultório médico
- O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome
- O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila, “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”
- O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu

#### Pilha de Cartas

- Escrever um programa em javascript para simular um baralho de cartas
- O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas que estão atualmente no baralho e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”
- Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho
- Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada
- O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu

### Exercício 8

#### Cadastro de Imóveis

- Escrever um programa em javascript que funcione como um cadastro de imóveis
- O programa deve ter um menu interativo que sempre é exibido até que o usuário escolha sair
- O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados
- O menu deve ter a opção de salvar um imóvel
- Para salvar um novo imóvel o programa deve pedir as seguintes informações:
  - Nome do proprietário
  - Quantidade de quartos
  - Quantidade de banheiros
  - Se possui garagem
- O menu também deve ter a opção de mostrar todos os imóveis salvos

### Exercício 9

#### Calculadora Geométrica

- Escrever um programa em javascript para calcular a área de diferentes formas geométricas
- O programa deve iniciar com um menu contendo as diferentes opções de cálculos
- As opções devem ser:
  - área do triângulo: base \* altura / 2
  - área do retângulo: base \* altura
  - área do quadrado: lado²
  - área do trapézio: (base maior + base menor) \* altura / 2
  - área do círculo: pi \* raio² (considere pi = 3.14)
- Você deve escrever o programa usando funções sempre que possível para separar os procedimentos
- O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu

### Exercício 10

#### Sistema de Vagas de Emprego

- Escrever um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas
- O programa deve iniciar com um menu contendo as diferentes opções de cálculos
- Ele deve atender aos seguintes requisitos:
  - Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema
    - Listar vagas disponíveis
    - Criar um nova vaga
    - Visualizar uma vaga
    - Inscrever um candidato em uma vaga
    - Excluir uma vaga
    - Sair
  - A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas
  - A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las
  - A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos
  - A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga
  - A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la

## Meta

Davis Lamenha Sampaio - [Linkedin](https://www.linkedin.com/in/davislamenha/) - davislamenha@gmail.com

[Meu Github](https://github.com/davislamenha)
