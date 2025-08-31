<template>
  <div id="app">
    <router-view/>
    <audio ref="musica" :src="musicaSrc" autoplay></audio>
  </div>
</template>
<script>
export default {
    data()  {
      return {
        musicaSrc: ''
      }
    },
    
    watch:{
      $route(){
        if(this.$route.name === 'game'){
          this.playMusic('dbz-sound')
        } else if(this.$route.name === 'game-win') {
          this.playMusic('game-win-sound')
        } else if(this.$route.name === 'game-over'){
          this.playMusic('game-over-sound')
        }
      }
    },

    methods:{
      playMusic(src){
        this.musicaSrc =  require(`@/sounds/${src}.mp3`);
            this.$refs.musica.play().catch(err => {
              console.log('Erro ao tentar tocar a música:', err);
        });
      }
    }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

   .app{
        background-position: center;
    }
    .img-win, .img-loser, .img-index{
        margin-top: 170px;
        width: 100%;
    }  
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

@media (max-width:412px){
    .game-win-img, .game-over-img{
        margin-top: 90px;
        width: 100%;
    }   
}
</style>
