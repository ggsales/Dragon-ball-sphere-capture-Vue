<template>
  <div class="menu-bg">
    <h1>A dificuldade é 
      {{dificuldade}}
    </h1>
    <div class="cronometro-box">
      <span  v-for="esfera in esferas" :key="esfera.esferaAtual">
          {{esfera.esferaAtual}}
      </span>

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
          img:"esfera 1",
          esferaAtual: 1
        },
         {
          img:"esfera dois",
          esferaAtual: 2
        },
        {
          img:"esfera tres",
          esferaAtual: 3
        }
      ]
    }
  },
       mounted() {
        this.tempoDeJogo()
        },
        methods:{
          tempoDeJogo(){
            if(this.dificuldade === "normal"){
              this.tempoEsfera = 1500
            } else if (this.dificuldade === "dificil"){
              this.tempoEsfera = 1000
            } else if(this.dificuldade === "maisDeOitoMil"){
              this.tempoEsfera = 850
            }
            console.log("o tempo de esfera atual é:", this.tempoEsfera)
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
.cronometro-box p{

}
</style>