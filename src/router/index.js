import { createRouter, createWebHistory } from 'vue-router';
import GamePuzzle from '../components/GamePuzzle.vue';
import GameLeaderboard from '../components/GameLeaderboard.vue';

const routes = [
  { path: '/', component: GamePuzzle },
  { path: '/leaderboard', component: GameLeaderboard }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
