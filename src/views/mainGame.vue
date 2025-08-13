<template>
  <div class="menu-bg">
    <h1>A dificuldade é 
      {{dificuldade}}
    </h1>
    <div class="cronometro-box">
      <div v-for="(esfera) in esferas" :key="esfera.esferaAtual">
        <img :src="getImagePath(esfera.img)" :alt="'Esfera ' + esfera.esferaAtual">
      </div>
    </div>

  </div>
</template>

<script>
export default{
  data(){
    return{
      altura: 0,
      largura : 0,
      vida: 1,
      tempo: 15,
      tempoEsfera: 1500,
      dificuldade: this.$route.params.dificuldade,
      esferas : [
        {
          img:"esfera-cheia.png",
          esferaAtual: 1,

        },
         {
          img:"esfera-cheia.png",
          esferaAtual: 2
        },
        {
          img:"esfera-cheia.png",
          esferaAtual: 3
        }
      ]
    }
  },
    mounted() {
      this.tempoDeJogo()
      this.removeEsfera()
    },

    
    methods:{
      getImagePath(imageName) {
        return require(`@/assets/${imageName}`);
      },


      tempoDeJogo(){
        if(this.dificuldade === "normal"){
          this.tempoEsfera = 1500
        } else if (this.dificuldade === "dificil"){
          this.tempoEsfera = 1000
        } else if(this.dificuldade === "maisDeOitoMil"){
          this.tempoEsfera = 850
        }
      },

      removeEsfera(index){
        this.timer = setInterval(() => {
          this.esferas.splice(index, 1)
          if(this.esferas.length === 0){
            clearInterval(this.timer)
            this.$router.push({
              path: '/game-over',
              query: {
                gameWin: false
              } 
            })
          }
        }, 1000)  
        
      }

    }
}
</script>

<style scoped>
.menu-bg{
  position: relative;
}
.cronometro-box{
  position: absolute;
  background: rgba(0,0,0,0.7);
  width: 300px;
  height: 80px;
  bottom: 0;
  opacity: 2;
  color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>