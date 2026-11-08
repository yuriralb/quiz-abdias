// Edite as perguntas, alternativas, fundo e índice da resposta correta aqui.
// O índice começa em zero: 0 é a primeira alternativa, 1 a segunda, etc.
// O fundo aceita uma imagem (url("imagens/arquivo.jpeg")) ou um gradiente CSS.
const questoes = [
  {
    pergunta: "Como pode ser definido o movimento do Pan-Africanismo no contexto da trajetória de Abdias Nascimento e do Teatro Experimental do Negro (TEN)?",
    fundo: "url('imagens/i1.jpeg')",
    alternativas: [
      "Um movimento internacionalista de união e solidariedade da população negra que, na prática de Abdias Nascimento e do TEN, articulou o combate ao racismo no Brasil à valorização da ancestralidade e à conexão cultural e política com a África e a diáspora.",
      "Uma aliança partidária restrita entre a Frente Negra Brasileira e a Ação Integralista Brasileira para defender o isolamento político da população negra no cenário nacional.",
      "Uma proposta estritamente cênica voltada à encenação de textos europeus traduzidos, com rejeição explícita às manifestações culturais e religiosas de matriz africana.",
      "Um projeto governamental instituído pelo Estado Novo durante a Segunda Guerra Mundial com a finalidade de promover atores brancos no Teatro Municipal."
    ],
    correta: 0,
    explicacao: "O Pan-Africanismo, na trajetória de Abdias Nascimento e do TEN, manifestou-se na conexão entre o antirracismo brasileiro e as lutas políticas e culturais da África e das Américas. Essa prática apareceu no repertório do TEN, com poetas negros internacionais como Langston Hughes e Regino Pedroso, na dramaturgia de Rapsódia Negra, na introdução da Negritude francófona por Ironides Rodrigues e na realização do 3º Congresso de Cultura Negra das Américas, que contou com a presença da delegação do Congresso Nacional Africano (ANC)."
  },
  {
    pergunta: "Qual a importância do movimento da Negritude no pensamento de Abdias Nascimento e quais aspectos sociais e culturais ele visava combater?",
    fundo: "url('imagens/i2.jpeg')",
    alternativas: [
      "Constituiu uma diretriz política voltada à aceitação do branqueamento cultural como única forma válida de ascensão social e profissional da população negra no Brasil.",
      "Consistiu em uma proposta estritamente estética sem engajamento político, criada para proibir temas religiosos afro-brasileiros nas produções dramatúrgicas nacionais.",
      "Atuou como uma ferramenta estética, política e filosófica para combater a ideologia do branqueamento cultural e a negação da identidade negra, promovendo o resgate da memória e da religiosidade de matriz africana.",
      "Correspondeu a uma norma burocrática emitida pela Divisão de Diversões Públicas para proibir que companhias de teatro abordassem o racismo nas artes cênicas."
    ],
    correta: 2,
    explicacao: "No âmbito das ações de Abdias Nascimento e do TEN, a Negritude, introduzida por Ironides Rodrigues com a tradução de Orfeu Negro e a tese Estética da Negritude, foi empregada como instrumento de combate ao racismo estrutural e ao projeto de branqueamento cultural. Abdias valorizou os elementos de matriz africana, com destaque para o Candomblé, e denunciou, nas artes e em obras como Sortilégio (Mistério Negro), os conflitos provocados pela tentativa de aculturação e negação da identidade negra."
  },
  {
    pergunta: "Em qual contexto histórico Abdias Nascimento foi exilado e quais foram os desdobramentos desse período em sua trajetória política e intelectual?",
    fundo: "url('imagens/i3.jpeg')",
    alternativas: [
      "Foi exilado em 1968 durante a ditadura militar no Brasil, o que provocou o encerramento das atividades do TEN, levando-o aos Estados Unidos, onde lecionou na universidade, formulou o Quilombismo e discursou no Congresso dos EUA em 1980.",
      "Foi exilado em 1945 com o fim do Estado Novo, desencadeando a paralisação da estreia de O Imperador Jones no Teatro Municipal do Rio de Janeiro.",
      "Foi exilado em 1937 após desvincular-se da Ação Integralista Brasileira, resultando no encerramento da tramitação da Lei Afonso Arinos no Congresso Nacional.",
      "Foi exilado em 1950 durante a realização do I Congresso do Negro Brasileiro, o que impediu a publicação do livro O negro revoltado."
    ],
    correta: 0,
    explicacao: "Em 1968, em decorrência da ditadura militar instaurada no Brasil, Abdias Nascimento partiu para o exílio nos Estados Unidos, fato que marcou o encerramento das atividades do Teatro Experimental do Negro no país. No exílio, continuou sua militância e produção intelectual, atuou na academia, envolveu-se na criação do PDT a partir de 1981, desenvolveu a teoria do Quilombismo e discursou no Congresso Nacional dos Estados Unidos em 1980."
  },
  {
    pergunta: "O que levou Abdias do Nascimento a se afastar da Ação Integralista Brasileira?",
    fundo: "url('imagens/i4.jpeg')",
    alternativas: [
      "A falta de interesse pela política brasileira.",
      "Sua insatisfação com a presença de uma corrente racista dentro do movimento.",
      "A proibição de participar de atividades culturais.",
      "Sua decisão de abandonar qualquer forma de atuação política."
    ],
    correta: 1,
    explicacao: "Abdias se aproximou do integralismo porque se identificava com algumas ideias nacionalistas e anti-imperialistas defendidas pelo grupo. Entretanto, com o tempo, passou a questionar as contradições do movimento, principalmente a presença de ideias racistas. Essa insatisfação contribuiu para seu afastamento, em 1937, demonstrando que sua participação não significava concordância com todas as propostas integralistas."
  },
  {
    pergunta: "Qual foi a importância da criação da Secretaria do Movimento Negro do PDT, liderada por Abdias?",
    fundo: "url('imagens/i5.jpeg')",
    alternativas: [
      "Criar um espaço para ampliar a participação de militantes negros nas discussões políticas do partido.",
      "Substituir os demais movimentos sociais brasileiros.",
      "Impedir a participação da população negra na política institucional.",
      "Desenvolver exclusivamente atividades culturais e artísticas."
    ],
    correta: 0,
    explicacao: "A criação da Secretaria do Movimento Negro, em 1981, foi importante porque permitiu que militantes negros organizados dentro do PDT participassem diretamente das discussões políticas. A iniciativa ajudou a fortalecer as reivindicações relacionadas ao combate ao racismo e à igualdade de direitos, mostrando a importância da participação da população negra nos espaços de decisão."
  },
  {
    pergunta: "O que podemos compreender ao observar a passagem de Abdias pelo integralismo e sua atuação posterior no PDT?",
    fundo: "url('imagens/i1.jpeg')",
    alternativas: [
      "Que suas ideias permaneceram iguais durante toda a vida.",
      "Que ele deixou de participar da política depois de sair do integralismo.",
      "Que sua trajetória foi marcada por experiências, questionamentos e mudanças de posicionamento, fortalecendo posteriormente sua luta antirracista.",
      "Que sua atuação política esteve relacionada apenas à disputa por cargos."
    ],
    correta: 2,
    explicacao: "A trajetória de Abdias mostra que sua participação política passou por diferentes momentos e contextos. Sua aproximação com o integralismo e o posterior afastamento demonstram que ele também questionou as ideias dos movimentos dos quais participou. Mais tarde, sua atuação no PDT foi marcada pela defesa dos direitos da população negra e pelo combate ao racismo. Dessa forma, podemos compreender que sua trajetória foi construída por meio de experiências e escolhas políticas, sem que isso represente uma continuidade entre os dois movimentos."
  },
  {
    pergunta: "A Frente Negra Brasileira (FNB), fundada em 1931, teve grande importância para a organização da população negra no Brasil. Qual alternativa apresenta corretamente algumas de suas formas de atuação?",
    fundo: "url('imagens/i2.jpeg')",
    alternativas: [
      "Defendia que a população negra deveria abandonar a participação política e concentrar seus esforços exclusivamente no trabalho.",
      "Promovia atividades educacionais, culturais, assistenciais e políticas, além de publicar o jornal A Voz da Raça.",
      "Atuava apenas por meio de manifestações artísticas, sem desenvolver atividades de formação ou assistência social.",
      "Tinha como principal objetivo representar os interesses dos imigrantes europeus no mercado de trabalho brasileiro."
    ],
    correta: 1,
    explicacao: "A Frente Negra Brasileira buscava combater o racismo por meio da organização coletiva da população negra. Para isso, oferecia cursos de alfabetização e formação profissional, palestras, atividades culturais e assistência jurídica, além de possuir departamentos voltados à educação, saúde, cultura e esporte. Também publicava o jornal A Voz da Raça, utilizado para divulgar suas reivindicações e denunciar a discriminação racial."
  },
  {
    pergunta: "Em que contexto político e por quais episódios o MNU foi criado em 1978?",
    fundo: "url('imagens/i3.jpeg')",
    alternativas: [
      "Durante a ditadura civil-militar, após a morte de Robson Silveira da Luz em uma delegacia de São Paulo e a expulsão de quatro jovens negros do time de basquete do Clube de Regatas Tietê.",
      "Durante o Estado Novo, após a extinção da Frente Negra Brasileira e a proibição de partidos políticos.",
      "Durante a redemocratização, após a promulgação da Constituição de 1988 e as comemorações do centenário da abolição.",
      "Durante o Império, após a aprovação da Lei Áurea e a criação das primeiras irmandades negras."
    ],
    correta: 0,
    explicacao: "O MNU surgiu em 1978, em plena ditadura civil-militar e em meio ao processo de abertura política do regime instaurado em 1964. Naquele período, o Estado apresentava o Brasil como uma democracia racial, retirou o quesito cor/raça do Censo e vigiava as ações do movimento negro. A indignação com a tortura e a morte de Robson Silveira da Luz e com a discriminação sofrida pelos quatro jovens no Clube Tietê levou à fundação do movimento e ao ato público de 7 de julho de 1978, em São Paulo."
  },
  {
    pergunta: "Qual alternativa descreve corretamente os objetivos do MNU?",
    fundo: "url('imagens/i4.jpeg')",
    alternativas: [
      "Defendia a democracia racial oficial do Estado e propunha manter o 13 de maio como a principal data da população negra.",
      "Lutava contra a violência policial e a discriminação racial, denunciava o mito da democracia racial e instituiu o 20 de novembro como Dia Nacional da Consciência Negra.",
      "Concentrava-se exclusivamente na criação de escolas para alfabetizar pessoas negras, sem pautas políticas.",
      "Tinha como único objetivo a eleição de representantes negros para o Poder Legislativo."
    ],
    correta: 1,
    explicacao: "As bandeiras iniciais do MNU foram a luta contra a violência policial e a discriminação racial e a defesa da igualdade racial e de uma democracia racial autêntica. Em 1979, somaram-se a denúncia da tríplice exploração da mulher negra, por gênero, raça e classe, e a afirmação da diversidade homossexual. O movimento também defendia a reavaliação do papel do negro na história do Brasil e adotou o 20 de novembro, data da morte de Zumbi, no lugar do 13 de maio."
  },
  {
    pergunta: "Qual foi a proposta de Abdias do Nascimento na primeira assembleia do MNU e qual foi seu efeito?",
    fundo: "url('imagens/i5.jpeg')",
    alternativas: [
      "Propôs encerrar o movimento e integrá-lo a um partido político, o que foi aceito por unanimidade.",
      "Propôs criar o Ipeafro como braço educacional do MNU, o que ampliou a presença do movimento nas escolas.",
      "Propôs adotar o 13 de maio como data nacional do movimento, o que foi rejeitado após votação.",
      "Propôs incluir a palavra \"negro\" no nome da organização, o que mudou seu caráter e afastou a ideia de uma frente ampla aberta também a não negros."
    ],
    correta: 3,
    explicacao: "Na primeira assembleia, realizada em 23 de julho de 1978, em São Paulo, Abdias propôs acrescentar a palavra \"negro\" ao nome da entidade, que passou de Movimento Unificado Contra a Discriminação Racial para Movimento Negro Unificado Contra a Discriminação Racial. Após intenso debate e votação, a proposta foi aprovada. Isso derrotou a posição de Hamilton Cardoso e do Núcleo Negro Socialista, que defendiam uma frente ampla aberta também a não negros, e consolidou o MNU como uma organização voltada a organizar o povo negro."
  }
];

const textoModal = "Arraste cada grupo até a alternativa escolhida (ou toque no grupo e depois na alternativa). Quando todos tiverem respondido, confirme a rodada. Cada resposta correta vale um ponto para o grupo.";

const grupos = [];
let indiceQuestao = 0;
let grupoSelecionado = null;
let respostas = {};
let rodadaConfirmada = false;

const telas = {
  configuracao: document.getElementById("tela-configuracao"),
  quiz: document.getElementById("tela-quiz"),
  final: document.getElementById("tela-final"),
};

function mostrarTela(telaAtiva) {
  Object.values(telas).forEach((tela) => tela.classList.add("oculta"));
  telas[telaAtiva].classList.remove("oculta");
  if (telaAtiva !== "quiz") document.body.style.removeProperty("--fundo-pagina");
}

function renderizarGruposCadastrados() {
  const lista = document.getElementById("grupos-cadastrados");
  lista.replaceChildren();
  document.getElementById("contagem-grupos").textContent = `(${grupos.length})`;
  document.getElementById("iniciar-quiz").disabled = grupos.length < 2;

  grupos.forEach((grupo) => {
    const item = document.createElement("div");
    item.className = "grupo-cadastrado";
    const cor = document.createElement("span");
    cor.className = "ponto-cor";
    cor.style.backgroundColor = grupo.cor;
    const nome = document.createElement("span");
    nome.className = "nome-grupo";
    nome.textContent = grupo.nome;
    const remover = document.createElement("button");
    remover.className = "remover-grupo";
    remover.type = "button";
    remover.textContent = "×";
    remover.setAttribute("aria-label", `Remover ${grupo.nome}`);
    remover.addEventListener("click", () => {
      const indice = grupos.findIndex((itemGrupo) => itemGrupo.id === grupo.id);
      if (indice !== -1) grupos.splice(indice, 1);
      renderizarGruposCadastrados();
    });
    item.append(cor, nome, remover);
    lista.appendChild(item);
  });
}

document.getElementById("form-grupo").addEventListener("submit", (evento) => {
  evento.preventDefault();
  const campoNome = document.getElementById("nome-grupo-input");
  const nome = campoNome.value.trim();
  if (!nome) return;
  if (grupos.some((grupo) => grupo.nome.toLocaleLowerCase() === nome.toLocaleLowerCase())) {
    document.getElementById("aviso-grupos").textContent = "Já existe um grupo com esse nome.";
    return;
  }
  grupos.push({
    id: crypto.randomUUID(),
    nome,
    cor: document.getElementById("cor-grupo-input").value,
    pontos: 0,
  });
  campoNome.value = "";
  document.getElementById("aviso-grupos").textContent = "";
  renderizarGruposCadastrados();
  campoNome.focus();
});

function iniciarQuiz() {
  indiceQuestao = 0;
  grupos.forEach((grupo) => { grupo.pontos = 0; });
  respostas = {};
  rodadaConfirmada = false;
  mostrarTela("quiz");
  renderizarQuestao();
}

function atribuirGrupo(idGrupo, indiceAlternativa) {
  if (!idGrupo) return;
  respostas[idGrupo] = indiceAlternativa;
  grupoSelecionado = null;
  renderizarQuestao();
}

function criarGrupoChip(grupo) {
  const chip = document.createElement("span");
  chip.className = "grupo-chip";
  const cor = document.createElement("span");
  cor.className = "ponto-cor";
  cor.style.backgroundColor = grupo.cor;
  const nome = document.createElement("span");
  nome.textContent = grupo.nome;
  chip.append(cor, nome);
  return chip;
}

function renderizarQuestao() {
  const questao = questoes[indiceQuestao];
  if (questao.fundo) {
    document.body.style.setProperty("--fundo-pagina", questao.fundo);
  } else {
    document.body.style.removeProperty("--fundo-pagina");
  }
  document.getElementById("progresso").textContent = `Pergunta ${indiceQuestao + 1} de ${questoes.length}`;
  document.getElementById("progresso-barra").style.width = `${((indiceQuestao + 1) / questoes.length) * 100}%`;
  document.getElementById("pergunta").textContent = questao.pergunta;

  const placar = document.getElementById("placar-resumo");
  placar.replaceChildren();
  grupos.forEach((grupo) => {
    const item = document.createElement("span");
    item.className = "placar-item";
    item.appendChild(criarGrupoChip(grupo).firstElementChild);
    const nome = document.createElement("span");
    nome.textContent = grupo.nome;
    const pontos = document.createElement("strong");
    pontos.textContent = grupo.pontos;
    item.append(nome, pontos);
    placar.appendChild(item);
  });

  const listaGrupos = document.getElementById("grupos-arrastaveis");
  listaGrupos.replaceChildren();
  grupos.forEach((grupo) => {
    const botao = document.createElement("button");
    botao.className = "grupo-arrastavel";
    if (respostas[grupo.id] !== undefined) botao.classList.add("respondido");
    if (grupoSelecionado === grupo.id) botao.classList.add("selecionado");
    botao.type = "button";
    botao.draggable = true;
    botao.setAttribute("aria-pressed", String(grupoSelecionado === grupo.id));
    const cor = document.createElement("span");
    cor.className = "ponto-cor";
    cor.style.backgroundColor = grupo.cor;
    const nome = document.createElement("span");
    nome.className = "nome-grupo";
    nome.textContent = grupo.nome;
    botao.append(cor, nome);
    botao.addEventListener("click", () => {
      grupoSelecionado = grupoSelecionado === grupo.id ? null : grupo.id;
      renderizarQuestao();
    });
    botao.addEventListener("dragstart", (evento) => {
      evento.dataTransfer.setData("text/plain", grupo.id);
      evento.dataTransfer.effectAllowed = "move";
    });
    listaGrupos.appendChild(botao);
  });

  const listaAlternativas = document.getElementById("alternativas");
  listaAlternativas.replaceChildren();
  questao.alternativas.forEach((texto, indice) => {
    const alternativa = document.createElement("button");
    alternativa.className = "alternativa";
    alternativa.type = "button";
    const textoAlternativa = document.createElement("span");
    textoAlternativa.className = "alternativa-texto";
    textoAlternativa.textContent = `${String.fromCharCode(65 + indice)}. ${texto}`;
    const chips = document.createElement("span");
    chips.className = "grupos-na-alternativa";
    grupos
      .filter((grupo) => respostas[grupo.id] === indice)
      .forEach((grupo) => chips.appendChild(criarGrupoChip(grupo)));
    alternativa.append(textoAlternativa, chips);
    alternativa.addEventListener("click", () => {
      if (grupoSelecionado) atribuirGrupo(grupoSelecionado, indice);
    });
    alternativa.addEventListener("dragover", (evento) => {
      evento.preventDefault();
      alternativa.classList.add("arraste-sobre");
    });
    alternativa.addEventListener("dragleave", () => alternativa.classList.remove("arraste-sobre"));
    alternativa.addEventListener("drop", (evento) => {
      evento.preventDefault();
      alternativa.classList.remove("arraste-sobre");
      atribuirGrupo(evento.dataTransfer.getData("text/plain"), indice);
    });
    listaAlternativas.appendChild(alternativa);
  });

  const quantidadeRespondida = Object.keys(respostas).length;
  document.getElementById("confirmar-rodada").disabled = quantidadeRespondida !== grupos.length || rodadaConfirmada;
  document.getElementById("status-rodada").textContent = quantidadeRespondida === grupos.length
    ? "Todos os grupos responderam. Confirme para registrar os pontos."
    : `${quantidadeRespondida} de ${grupos.length} grupos responderam.`;
}

function confirmarRodada() {
  if (rodadaConfirmada) return;
  const questao = questoes[indiceQuestao];
  grupos.forEach((grupo) => {
    if (respostas[grupo.id] === questao.correta) grupo.pontos += 1;
  });
  rodadaConfirmada = true;
  const respostaCorreta = questao.alternativas[questao.correta];
  document.getElementById("titulo-modal-resposta").textContent = `${String.fromCharCode(65 + questao.correta)}. ${respostaCorreta}`;
  document.getElementById("explicacao-resposta").textContent = questao.explicacao;
  document.getElementById("avancar-pergunta").textContent = indiceQuestao < questoes.length - 1
    ? "Próxima pergunta →"
    : "Ver placar final →";
  document.getElementById("modal-resposta").showModal();
}

function avancarPergunta() {
  document.getElementById("modal-resposta").close();
  if (indiceQuestao < questoes.length - 1) {
    indiceQuestao += 1;
    respostas = {};
    rodadaConfirmada = false;
    renderizarQuestao();
  } else {
    renderizarPlacarFinal();
  }
}

function renderizarPlacarFinal() {
  const placar = document.getElementById("placar-final");
  placar.replaceChildren();
  [...grupos]
    .sort((a, b) => b.pontos - a.pontos || a.nome.localeCompare(b.nome))
    .forEach((grupo, indice) => {
      const linha = document.createElement("div");
      linha.className = "linha-placar";
      const posicao = document.createElement("span");
      posicao.textContent = `${indice + 1}º`;
      const cor = document.createElement("span");
      cor.className = "ponto-cor";
      cor.style.backgroundColor = grupo.cor;
      const nome = document.createElement("span");
      nome.className = "nome-grupo";
      nome.textContent = grupo.nome;
      const pontos = document.createElement("strong");
      pontos.textContent = `${grupo.pontos} ${grupo.pontos === 1 ? "ponto" : "pontos"}`;
      linha.append(posicao, cor, nome, pontos);
      placar.appendChild(linha);
    });
  mostrarTela("final");
}

document.getElementById("iniciar-quiz").addEventListener("click", iniciarQuiz);
document.getElementById("confirmar-rodada").addEventListener("click", confirmarRodada);
document.getElementById("avancar-pergunta").addEventListener("click", avancarPergunta);
document.getElementById("voltar-configuracao").addEventListener("click", () => mostrarTela("configuracao"));

const modal = document.getElementById("modal-ajuda");
document.getElementById("texto-modal").textContent = textoModal;
document.getElementById("abrir-modal").addEventListener("click", () => modal.showModal());
document.getElementById("fechar-modal").addEventListener("click", () => modal.close());

renderizarGruposCadastrados();
