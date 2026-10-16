<template>
  <main class="menu-bg">
    <div class="container result-content">
      <img src="../assets/game-win.png" alt="Vitória" class="game-win-img">
      <p class="result-score" aria-live="polite">Você capturou {{ pontuacao }} esfera(s)!</p>
      <button type="button" class="btn btn-danger btn-home" @click="redirectMenu">Voltar ao menu</button>
    </div>
  </main>
</template>
<script>
export default {
  computed: { pontuacao() { return Math.max(0, Number(this.$route.query.score) || 0) } },
  methods: {
    redirectMenu() {
      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(erro => console.warn('Could not exit fullscreen:', erro))
      }
      this.$router.push({ path: '/' })
    },
  },
}
</script>
<style>
.result-content {
  min-height: 100vh; min-height: 100dvh; display: flex; justify-content: center;
  align-items: center; flex-direction: column; padding: 24px 12px;
}
.game-win-img { width: min(60%, 700px); max-height: 65vh; object-fit: contain; pointer-events: none; }
.result-score { margin: 12px; color: #fff; font-size: 1.25rem; font-weight: 700; text-shadow: 0 1px 4px #000; }
.btn-home:focus-visible { outline: 3px solid #fff; outline-offset: 3px; }
@media (max-width: 600px) { .game-win-img { width: 100%; max-height: 55vh; } }
</style>
