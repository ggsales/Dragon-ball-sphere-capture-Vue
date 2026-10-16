# Orientações para agentes

## Visão do projeto

Este repositório contém um jogo de reflexo inspirado em Dragon Ball, feito com Vue 3, Vue Router 4 e Vite. O jogador escolhe uma dificuldade, captura esferas e tenta sobreviver até o cronômetro terminar. O projeto é para fins de estudo.

## Estrutura principal

- src/views/HomeView.vue: menu e seleção de dificuldade.
- src/views/mainGame.vue: partida, cronômetro, vidas, geração e captura.
- src/views/GameWin.vue e src/views/GameOver.vue: telas de resultado.
- src/router/index.js: configuração das rotas.
- src/App.vue: estrutura raiz e música conforme a rota.
- src/assets/ e src/sounds/: recursos locais.
- src/main.js: inicialização do Vue 3 e do roteador.
- index.html e vite.config.js: entrada e configuração do Vite.

## Diretrizes de implementação

- Preserve a compatibilidade com Vue 3, Vue Router 4 e Vite.
- Use os componentes .vue existentes; mantenha a lógica na view correspondente, salvo quando a tarefa justificar extração.
- Ao alterar navegação, confira nomes e caminhos em src/router/index.js.
- Ao alterar o jogo, considere conjuntamente cronômetro, vidas, temporizadores e transições de resultado.
- Use hooks do Vue 3, como beforeUnmount, e APIs reativas nativas; não use APIs removidas do Vue 2, como this.$set.
- Reutilize imagens e sons locais; não presuma que existam serviços de backend ou APIs externas.
- Mantenha os textos em português e preserve a identidade visual, salvo pedido diferente.
- Evite dependências desnecessárias e consulte package.json antes de adicionar bibliotecas.

## Comandos disponíveis

- npm run serve: iniciar o servidor Vite.
- npm run build: gerar a versão de produção em dist/.
- npm run preview: visualizar localmente o build.
- npm run lint: analisar JavaScript e componentes Vue.

Execute verificações apenas quando a tarefa solicitar testes ou validação, ou quando isso for necessário para confirmar uma alteração pedida.
