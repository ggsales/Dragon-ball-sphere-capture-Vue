<template>
  <div class="menu-bg">
    <h1>A dificuldade é 
      {{dificuldade}}
    </h1>

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
      dificuldade: this.$route.params.dificuldade
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

<style>
p{
  color: black;
}
</style>