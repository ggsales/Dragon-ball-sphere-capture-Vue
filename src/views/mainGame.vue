<template>
  <div class="menu-bg">

    <div class="cronometro-box">
      Tempo restante: <span>{{ tempo }}</span>
    </div>

    <div class="vidas">
      <img 
        v-for="(vida, index) in vidas" 
        :key="index"
        :src="getImagePath(vida ? 'esfera-cheia.png' : 'esfera-vazia.png')"
        class="vida"
      />
    </div>

    <div class="jogo-area">
      <img
        v-for="(esfera, index) in esferas"
        :key="esfera.id"
        :src="getImagePath('esfera.png')"
        :class="[esfera.tamanho, esfera.lado]"
        :style="{ left: esfera.x + 'px', top: esfera.y + 'px', position: 'absolute' }"
        @click="clicarEsfera(index)"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      largura: 0,
      altura: 0,
      tempo: 15,
      tempoEsfera: 1500,
      vidas: [true, true, true],
      esferas: [],
      timerCronometro: null,
      timerEsferas: null,
    }
  },

  computed:{
    dificuldade() {
      return this.$route.params.dificuldade
  }

  }, 
  mounted() {
    this.ajustaTamanhoPalcoJogo()
    this.definirDificuldade()
    this.iniciaCronometro()
    this.iniciaEsferas()
  },
  beforeUnmount() {
    clearInterval(this.timerCronometro)
    clearInterval(this.timerEsferas)
  },
  methods: {
    getImagePath(imageName) {
      return require(`@/assets/${imageName}`)
    },

    ajustaTamanhoPalcoJogo() {
      this.altura = window.innerHeight
      this.largura = window.innerWidth
    },

    definirDificuldade() {
      if (this.dificuldade === "normal") this.tempoEsfera = 1500
      else if (this.dificuldade === "dificil") this.tempoEsfera = 1000
      else if (this.dificuldade === "maisDeOitoMil") this.tempoEsfera = 850
    },

    iniciaCronometro() {
      this.timerCronometro = setInterval(() => {
        this.tempo--
        if (this.tempo < 0) {
          clearInterval(this.timerCronometro)
          clearInterval(this.timerEsferas)
          this.verificaFimDeJogo(true) 
        }
      }, 1000)
    },

    iniciaEsferas() {
      this.timerEsferas = setInterval(() => {
        this.geraEsfera()
      }, this.tempoEsfera)
    },

    geraEsfera() {
      const posicaoX = Math.max(Math.floor(Math.random() * this.largura) - 90, 0)
      const posicaoY = Math.max(Math.floor(Math.random() * this.altura) - 90, 0)

      const esfera = {
        id: Date.now(),
        x: posicaoX,
        y: posicaoY,
        tamanho: this.tamanhoAleatorio(),
        lado: this.ladoAleatorio(),
        ativa: true,
      }

      this.esferas.push(esfera)

      
      setTimeout(() => {
        const index = this.esferas.findIndex(e => e.id === esfera.id)
        if (index !== -1 && this.esferas[index].ativa) {
          this.esferas.splice(index, 1)
          this.perdeVida()
        }
      }, this.tempoEsfera - 100) 
    },

    clicarEsfera(index) {
      this.esferas.splice(index, 1)
    },

    perdeVida() {
      const idx = this.vidas.findIndex(v => v === true)
      if (idx !== -1) this.$set(this.vidas, idx, false)

      if (!this.vidas.includes(true)) {
        clearInterval(this.timerCronometro)
        clearInterval(this.timerEsferas)
        this.verificaFimDeJogo(false) 
      }
    },

    verificaFimDeJogo(venceu) {
      if (venceu && this.vidas.includes(true)) {
        this.$router.push({
              path: '/game-win',
              query: {
                gameWin: true
              } 
        })
      } else {
        this.$router.push({
              path: '/game-over',
              query: {
                gameWin: false
              } 
        })
      }
    },

    tamanhoAleatorio() {
      const classes = ['esfera1', 'esfera2', 'esfera3']
      return classes[Math.floor(Math.random() * classes.length)]
    },

    ladoAleatorio() {
      return Math.random() > 0.5 ? 'ladoA' : 'ladoB'
    },
  }
}
</script>

<style scoped>


.menu-bg {
    background-image: url(../assets/bg.png);
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    cursor: url('../assets/goku1.png') 30 30, auto;
}

.cronometro-box {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(0,0,0,0.7);
  color: white;
  padding: 10px;
  border-radius: 8px;
}

.vidas {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 5px;
}

.vida {
  width: 40px;
}

.jogo-area img {
  cursor: pointer;
}

.esfera1 {
  width: 50px;
  height: 50px;
}

.esfera2 {
  width: 80px;
  height: 80px;
}

.esfera3 {
  width: 120px;
  height: 120px;
}

.ladoA {
  transform: scaleX(1);
}

.ladoB {
  transform: scaleX(-1);
}
@media (max-width:412px){

    .mt-mobile{
      padding-top: 60px;
    }
 

    .esfera1 {
        width: 30px;
        height: 30px;
    }
    
    .esfera2 {
        width: 50px;
        height: 50px;
    }
    
    
    .esfera3 {
        width: 70px;
        height: 70px;
    }

}
</style>
