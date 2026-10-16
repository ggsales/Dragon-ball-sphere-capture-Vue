# Dragon Ball: Captura das Esferas

Jogo de reflexo para navegador inspirado em Dragon Ball. Capture o máximo de Esferas do Dragão que conseguir e sobreviva à partida.

**Finalidade:** projeto desenvolvido para fins de estudo e prática de desenvolvimento web.

## Como jogar

1. Escolha uma dificuldade e pressione **Jogar**. O jogo solicita tela cheia quando o navegador oferece suporte.
2. Clique ou toque nas esferas antes que desapareçam. Com teclado, use **Tab** para focar uma esfera e **Enter** ou **Espaço** para capturá-la.
3. Cada captura soma um ponto. Uma esfera que desaparece sem ser capturada custa uma vida.
4. A partida dura 15 segundos e começa com três vidas. Você vence se ainda tiver pelo menos uma vida quando o tempo chegar a zero.

### Dificuldades

| Dificuldade | Intervalo entre esferas | Tempo aproximado para capturar |
| --- | ---: | ---: |
| Normal | 1,5 s | 1,4 s |
| Difícil | 1 s | 0,9 s |
| Mais de oito mil! | 0,85 s | 0,75 s |

## Executar localmente

### Requisitos

- Node.js 22.12 ou superior, ou Node.js 20.19 ou superior
- npm

### Instalar e iniciar o servidor de desenvolvimento

Na pasta do projeto, execute:

    npm install
    npm run serve

O Vite normalmente inicia em http://localhost:5173. O terminal informa o endereço efetivamente usado.

### Gerar e visualizar o build

    npm run build
    npm run preview

Os arquivos de produção são gerados na pasta dist/.

### Analisar o código

    npm run lint

## Tecnologias

- Vue 3 e Vue Router 4
- Vite
- Bootstrap 5 para estilos
- JavaScript, HTML e CSS

## Estrutura principal

- src/views/: menu, partida e telas de resultado.
- src/router/: rotas da aplicação.
- src/assets/ e src/sounds/: imagens e músicas locais.
- src/main.js: inicialização do Vue e registro do roteador.
- index.html: entrada HTML do Vite.
- vite.config.js: plugins e alias de importação.

## Publicação

A aplicação usa o modo history do Vue Router. Ao hospedar a pasta dist/, configure o servidor para encaminhar rotas como /game/normal para index.html. Sem essa regra, abrir ou atualizar diretamente uma rota interna pode retornar erro 404.
