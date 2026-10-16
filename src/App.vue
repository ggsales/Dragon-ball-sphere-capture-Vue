<template>
  <div id="app">
    <router-view />
    <audio ref="musica" :src="musicaSrc" autoplay></audio>
  </div>
</template>

<script>
import dbzSound from '@/sounds/dbz-sound.mp3'
import gameWinSound from '@/sounds/game-win-sound.mp3'
import gameOverSound from '@/sounds/game-over-sound.mp3'

export default {
  data() {
    return {
      musicaSrc: '',
      musicas: {
        game: dbzSound,
        'game-win': gameWinSound,
        'game-over': gameOverSound,
      },
    }
  },

  watch: {
    '$route.name'(nomeRota) {
      const proximaMusica = this.musicas[nomeRota]
      if (proximaMusica) {
        this.playMusic(proximaMusica)
      } else {
        this.musicaSrc = ''
        if (this.$refs.musica) this.$refs.musica.pause()
      }
    },
  },

  methods: {
    playMusic(src) {
      this.musicaSrc = src
      this.$nextTick(() => {
        const audio = this.$refs.musica
        if (audio) {
          audio.play().catch(() => {
            // Alguns navegadores bloqueiam a reprodução automática até uma interação.
          })
        }
      })
    },
  },
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

.app { background-position: center; }
nav { padding: 30px; }
nav a { font-weight: bold; color: #2c3e50; }
nav a.router-link-exact-active { color: #42b983; }
</style>
