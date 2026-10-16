# 🐉 Dragon Ball: Captura das Esferas

Um jogo de reflexo para navegador inspirado em Dragon Ball. Capture o máximo de Esferas do Dragão que conseguir e sobreviva à partida!

**Finalidade:** projeto criado para fins de estudo e prática de desenvolvimento web.

## Como jogar

1. Escolha uma dificuldade e pressione **Jogar**. O jogo solicita tela cheia quando o navegador oferece suporte; se não oferecer, a partida ainda pode ser jogada normalmente.
2. Clique ou toque nas esferas antes que desapareçam. Também é possível usar **Tab** para focar uma esfera e **Enter** ou **Espaço** para capturá-la.
3. Cada esfera capturada soma um ponto. Uma esfera que desaparece sem ser capturada custa uma vida.
4. A partida dura 15 segundos e começa com três vidas. Você vence se ainda tiver pelo menos uma vida quando o tempo chegar a zero.

### Dificuldades

| Dificuldade | Intervalo entre esferas | Tempo aproximado para capturar cada esfera |
| --- | ---: | ---: |
| Normal | 1,5 s | 1,4 s |
| Difícil | 1 s | 0,9 s |
| Mais de oito mil! | 0,85 s | 0,75 s |

## Começar a jogar

### Pré-requisitos

- Node.js e npm instalados.

### Instalação e desenvolvimento

Na pasta do projeto, instale as dependências e inicie o servidor local:

```bash
npm install
npm run serve
```

Abra o endereço indicado no terminal. Normalmente, o servidor fica em [http://localhost:8080](http://localhost:8080).

### Build de produção

```bash
npm run build
```

Os arquivos prontos para publicação são gerados na pasta `dist/`.

### Verificação de código

```bash
npm run lint
```

## Tecnologias

- Vue 2.7 e Vue Router 3
- Vue CLI 5
- Bootstrap e BootstrapVue
- JavaScript, HTML e CSS

## Estrutura do projeto

```text
src/
├── assets/       # Imagens usadas pelo jogo
├── router/       # Rotas da aplicação
├── sounds/       # Músicas das telas e da partida
├── views/        # Menu, jogo e telas de resultado
├── App.vue       # Estrutura raiz e áudio
└── main.js       # Inicialização do Vue e dos plugins
```

## Publicação

O roteador usa o modo `history`. Ao hospedar o conteúdo de `dist/`, configure o servidor para encaminhar rotas da aplicação, como `/game/normal`, para `index.html`. Sem essa regra, abrir ou atualizar diretamente uma rota interna pode retornar erro 404.
