<template>
  <main class="menu-bg">
    <div class="cronometro-box" role="timer" :aria-label="'Tempo restante: ' + tempo + ' segundos'">
      Tempo restante: <span>{{ tempo }} s</span>
    </div>
    <div class="placar-box" aria-live="polite" aria-atomic="true">Esferas capturadas: <span>{{ pontuacao }}</span></div>
    <div class="vidas" role="img" :aria-label="'Vidas restantes: ' + vidasRestantes">
      <img v-for="(vida, index) in vidas" :key="index"
        :src="getImagePath(vida ? 'esfera-cheia.png' : 'esfera-vazia.png')"
        class="vida" alt="" />
    </div>
    <div ref="arena" class="jogo-area" role="group" aria-label="Área de captura das esferas">
      <button v-for="(esfera, index) in esferas" :key="esfera.id"
        type="button" class="esfera-alvo" :class="[esfera.tamanho, esfera.lado]"
        :style="{ left: esfera.x + 'px', top: esfera.y + 'px' }"
        :aria-label="'Capturar esfera do dragão ' + (index + 1)"
        @click="capturarEsfera(esfera.id)">
        <img :src="getImagePath('esfera.png')" alt="" draggable="false" />
      </button>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      largura: 0, altura: 0, tempo: 15, tempoEsfera: 1500,
      vidas: [true, true, true], esferas: [], pontuacao: 0,
      proximoId: 0, partidaAtiva: true, timerCronometro: null, timerEsferas: null,
    }
  },
  computed: {
    dificuldade() { return this.$route.params.dificuldade },
    vidasRestantes() { return this.vidas.filter(Boolean).length },
  },
  mounted() {
    this.ajustaTamanhoPalcoJogo()
    this.definirDificuldade()
    window.addEventListener('resize', this.ajustaTamanhoPalcoJogo)
    this.iniciaCronometro()
    this.iniciaEsferas()
  },
  beforeDestroy() {
    this.limpaTemporizadores()
    window.removeEventListener('resize', this.ajustaTamanhoPalcoJogo)
  },
  methods: {
    getImagePath(imageName) {
      const imagens = {
        'esfera.png': require('@/assets/esfera.png'),
        'esfera-cheia.png': require('@/assets/esfera-cheia.png'),
        'esfera-vazia.png': require('@/assets/esfera-vazia.png'),
      }
      return imagens[imageName]
    },
    ajustaTamanhoPalcoJogo() {
      const arena = this.$refs.arena
      if (!arena) return
      this.largura = arena.clientWidth
      this.altura = arena.clientHeight
    },
    definirDificuldade() {
      const intervalos = { normal: 1500, dificil: 1000, maisDeOitoMil: 850 }
      this.tempoEsfera = intervalos[this.dificuldade] || intervalos.normal
    },
    iniciaCronometro() {
      this.timerCronometro = setInterval(() => {
        if (this.tempo > 0) this.tempo--
        if (this.tempo === 0) this.encerraPartida(this.vidas.includes(true))
      }, 1000)
    },
    iniciaEsferas() {
      this.timerEsferas = setInterval(() => this.geraEsfera(), this.tempoEsfera)
    },
    geraEsfera() {
      if (!this.partidaAtiva || !this.largura || !this.altura) return
      const tamanho = this.tamanhoAleatorio()
      const tamanhoPx = this.tamanhoEmPixels(tamanho)
      const esfera = {
        id: ++this.proximoId,
        x: Math.floor(Math.random() * Math.max(1, this.largura - tamanhoPx)),
        y: Math.floor(Math.random() * Math.max(1, this.altura - tamanhoPx)),
        tamanho, lado: this.ladoAleatorio(), timer: null,
      }
      esfera.timer = setTimeout(() => {
        const index = this.esferas.findIndex(item => item.id === esfera.id)
        if (index !== -1 && this.partidaAtiva) {
          this.esferas.splice(index, 1)
          this.perdeVida()
        }
      }, this.tempoEsfera - 100)
      this.esferas.push(esfera)
    },
    tamanhoEmPixels(tamanho) {
      const desktop = { esfera1: 50, esfera2: 80, esfera3: 120 }
      const mobile = { esfera1: 30, esfera2: 50, esfera3: 70 }
      return (window.innerWidth <= 412 ? mobile : desktop)[tamanho]
    },
    capturarEsfera(id) {
      const index = this.esferas.findIndex(esfera => esfera.id === id)
      if (index === -1 || !this.partidaAtiva) return
      clearTimeout(this.esferas[index].timer)
      this.esferas.splice(index, 1)
      this.pontuacao++
    },
    perdeVida() {
      const idx = this.vidas.findIndex(vida => vida)
      if (idx !== -1) this.$set(this.vidas, idx, false)
      if (!this.vidas.includes(true)) this.encerraPartida(false)
    },
    encerraPartida(venceu) {
      if (!this.partidaAtiva) return
      this.partidaAtiva = false
      this.limpaTemporizadores()
      window.removeEventListener('resize', this.ajustaTamanhoPalcoJogo)
      this.$router.push({
        path: venceu ? '/game-win' : '/game-over',
        query: { score: this.pontuacao, dificuldade: this.dificuldade },
      })
    },
    limpaTemporizadores() {
      clearInterval(this.timerCronometro)
      clearInterval(this.timerEsferas)
      this.esferas.forEach(esfera => clearTimeout(esfera.timer))
      this.esferas = []
    },
    tamanhoAleatorio() {
      const classes = ['esfera1', 'esfera2', 'esfera3']
      return classes[Math.floor(Math.random() * classes.length)]
    },
    ladoAleatorio() { return Math.random() > 0.5 ? 'ladoA' : 'ladoB' },
  },
}
</script>
<style scoped>
.menu-bg {
  position: relative; width: 100%; height: 100vh; height: 100dvh; overflow: hidden;
  background: url(../assets/bg.png) center / cover no-repeat;
  cursor: url('../assets/goku1.png') 30 30, auto;
}
.cronometro-box, .placar-box, .vidas {
  position: absolute; z-index: 2; top: 12px; min-height: 42px; display: flex;
  align-items: center; padding: 8px 12px; border-radius: 8px;
  background: rgba(0, 0, 0, 0.75); color: #fff; font-weight: 600;
}
.cronometro-box { left: 12px; gap: 5px; }
.placar-box { left: 50%; transform: translateX(-50%); }
.vidas { right: 12px; gap: 5px; }
.vida { width: 32px; height: 32px; }
.jogo-area { position: absolute; z-index: 1; top: 70px; right: 12px; bottom: 12px; left: 12px; }
.esfera-alvo {
  position: absolute; display: block; padding: 0; border: 0; border-radius: 50%;
  background: transparent; line-height: 0; cursor: url('../assets/goku1.png') 30 30, pointer;
  touch-action: manipulation;
}
.esfera-alvo img { display: block; width: 100%; height: 100%; user-select: none; }
.esfera1 { width: 50px; height: 50px; }
.esfera2 { width: 80px; height: 80px; }
.esfera3 { width: 120px; height: 120px; }
.ladoA { transform: scaleX(1); }
.ladoB { transform: scaleX(-1); }
.esfera-alvo:focus-visible {
  outline: 3px solid #fff; outline-offset: 3px; box-shadow: 0 0 0 6px #1d1d1d;
}
@media (max-width: 600px) {
  .cronometro-box, .placar-box, .vidas { top: 8px; min-height: 38px; padding: 6px 8px; font-size: 12px; }
  .cronometro-box { left: 8px; }
  .placar-box { top: 52px; }
  .vidas { right: 8px; }
  .vida { width: 26px; height: 26px; }
  .jogo-area { top: 98px; right: 8px; bottom: 8px; left: 8px; }
  .esfera1 { width: 30px; height: 30px; }
  .esfera2 { width: 50px; height: 50px; }
  .esfera3 { width: 70px; height: 70px; }
}
</style>
