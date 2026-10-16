import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameOver from '../views/GameOver.vue'
import GameWin from '../views/GameWin.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/game/:dificuldade', name: 'game', component: () => import('../views/mainGame.vue') },
  { path: '/game-over', name: 'game-over', component: GameOver },
  { path: '/game-win', name: 'game-win', component: GameWin },
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
