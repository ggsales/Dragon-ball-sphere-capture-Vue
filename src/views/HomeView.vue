<template>
  <main id="Menu" class="menu-bg">
    <div class="container">
      <div class="box-menu">
        <img src="../assets/game1.png" alt="Jogo de capturar as Esferas do Dragão">
        <p class="game-instructions">
          Capture o máximo de esferas e sobreviva aos 15 segundos. Você vence se ainda tiver pelo menos uma vida ao final.
        </p>
        <label class="visually-hidden" for="seletor-dificuldade">Escolha a dificuldade</label>
        <select id="seletor-dificuldade" v-model="DifSelecionada" class="select-dif">
          <option v-for="item in dificuldades" :key="item.value" :value="item.value">
            {{ item.dificuldade }}
          </option>
        </select>
        <p class="difficulty-help" aria-live="polite">{{ descricaoDificuldade }}</p>
        <button type="button" class="btn btn-danger btn-home" @click="pegaDificuldade(DifSelecionada)">Jogar</button>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: 'MenuIndex',
  data() {
    return {
      dificuldades: [
        { value: '', dificuldade: 'Selecione uma dificuldade', descricao: 'Escolha o ritmo da partida.' },
        { value: 'normal', dificuldade: 'Normal', descricao: 'As esferas aparecem a cada 1,5 segundo.' },
        { value: 'dificil', dificuldade: 'Difícil', descricao: 'As esferas aparecem a cada 1 segundo.' },
        { value: 'maisDeOitoMil', dificuldade: 'Mais de oito mil!', descricao: 'As esferas aparecem a cada 0,85 segundo.' },
      ],
      DifSelecionada: '',
    }
  },
  computed: {
    descricaoDificuldade() {
      const selecionada = this.dificuldades.find(item => item.value === this.DifSelecionada)
      return selecionada ? selecionada.descricao : ''
    },
  },
  methods: {
    pegaDificuldade(dificuldade) {
      if (!dificuldade) {
        alert('Selecione uma dificuldade para iniciar.')
        return
      }
      const elemento = document.documentElement
      if (typeof elemento.requestFullscreen === 'function') {
        elemento.requestFullscreen().catch(erro => console.warn('Fullscreen request failed:', erro))
      }
      this.$router.push({ path: '/game/' + dificuldade })
    },
  },
}
</script>
<style>
.menu-bg { min-height: 100vh; min-height: 100dvh; background: url(../assets/bg.png) center / cover no-repeat; }
.box-menu {
  min-height: 100vh; min-height: 100dvh; display: flex; justify-content: center;
  align-items: center; flex-direction: column; padding: 24px 12px;
}
.box-menu > img { width: min(450px, 90vw); height: auto; }
.game-instructions {
  max-width: 440px;
  margin: 14px 12px;
  color: #fff;
  font-weight: 600;
  text-shadow: 0 1px 3px #000;
}
.select-dif { max-width: 90vw; padding: 6px 12px; border: 1px solid #000; border-radius: 10px; cursor: pointer; }
.difficulty-help { min-height: 1.5em; margin: 10px 12px 0; color: #fff; font-weight: 600; text-shadow: 0 1px 3px #000; }
.btn-home { margin-top: 10px; padding: 5px 45px; animation: btn-animation 2s linear infinite alternate; transition: box-shadow 0.5s linear; }
.select-dif:focus-visible, .btn-home:focus-visible { outline: 3px solid #fff; outline-offset: 3px; }
@keyframes btn-animation {
  0% { box-shadow: 0 3px 10px 5px #f4f4f4; }
  100% { box-shadow: 0 3px 10px 1px #ba0606; }
}
@media (prefers-reduced-motion: reduce) { .btn-home { animation: none; transition: none; } }
</style>
