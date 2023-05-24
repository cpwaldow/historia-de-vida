const btns = document.querySelectorAll('button');
const conteudo = document.getElementById('conteudo');

const obj = {
  1997: ['Início do Caduverso'],
  'Primeira infância': [
    'Jogar futebol com as pessoas da minha rua',
    'Pouco contato com meus pais por conta de trabalho',
    'Me enturmar para fazer novas amizades na escola nova',
  ],
  Infância: [
    'Ganhei meu primeiro video-game (ps2)',
    'Separação dos meus pais',
    'Dificuldade na escola, quase reprovação e conversa com meu avô sobre responsabilidades',
  ],
  Adolescência: [
    'Primeiro emprego, Início da faculdade, Tirar habilitação',
    'Dificuldade em conseguir estágio',
    'Permanecer ou não no curso que estava fazendo na faculdade',
  ],
  'Inicio da vida adulta': [
    'Consegui um estágio em uma produtora de vídeos',
    'Namorada se mudar para o outro lado da cidade',
    'Começar a me aventurar no mundinho TI, mudar de área e traçar metas e objetivos pessoais e profissionais',
  ],
};

btns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    conteudo.innerHTML = '';
    obj[event.target.innerText].forEach((text, index) => {
      const paragraph = document.createElement('p');
      paragraph.innerText = text;
      if (index === 0) {
        paragraph.classList.add('first');
      } else if (index === 1) {
        paragraph.classList.add('second');
      } else {
        paragraph.classList.add('third');
      }
      conteudo.appendChild(paragraph);
    });
  });
});
