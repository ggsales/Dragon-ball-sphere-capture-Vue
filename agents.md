# Orientações para agentes

## Visão do projeto

Este repositório contém um jogo de reflexo inspirado em Dragon Ball, feito com Vue 2 e Vue Router 3. O jogador escolhe uma dificuldade, clica nas esferas que aparecem na tela e tenta sobreviver até o cronômetro terminar.

## Estrutura principal

- `src/views/HomeView.vue`: menu inicial e seleção de dificuldade.
- `src/views/mainGame.vue`: partida, cronômetro, vidas, geração e captura das esferas.
- `src/views/GameWin.vue` e `src/views/GameOver.vue`: telas finais e retorno ao menu.
- `src/router/index.js`: rotas da aplicação.
- `src/App.vue`: estrutura raiz e música de acordo com a rota.
- `src/assets/` e `src/sounds/`: imagens e efeitos/músicas locais.
- `src/main.js`: inicialização do Vue, BootstrapVue e roteador.

## Diretrizes de implementação

- Preserve a compatibilidade com Vue 2.7, Vue Router 3 e a configuração atual do Vue CLI.
- Use os componentes `.vue` existentes e mantenha a lógica de cada tela junto à sua view, salvo se uma mudança justificar a extração de componentes ou módulos.
- Ao alterar navegação, confira as rotas e os nomes definidos em `src/router/index.js`.
- Ao alterar o jogo, considere conjuntamente cronômetro, vidas, temporizadores de geração e transições para vitória ou derrota.
- Limpe intervalos e temporizadores quando a partida terminar ou o componente for destruído, para evitar callbacks após a saída da tela.
- Reutilize os recursos locais em `src/assets/` e `src/sounds/`; não presuma que existam serviços de backend ou APIs externas.
- Mantenha textos da interface em português e preserve a identidade visual existente, a menos que a tarefa peça mudanças.
- Evite adicionar dependências sem necessidade; consulte `package.json` antes de propor bibliotecas.

## Comandos disponíveis

- `npm run serve`: iniciar o servidor de desenvolvimento.
- `npm run build`: gerar a versão de produção.
- `npm run lint`: executar o ESLint.

Execute verificações apenas quando a tarefa solicitar testes ou validação, ou quando isso for necessário para confirmar uma alteração pedida.
