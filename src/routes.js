import Character from './components/Character.vue';
import BrowseGames from './components/BrowseGames.vue';
import Game from './components/Game.vue';
import BrowseSeries from './components/BrowseSeries.vue';
import Series from './components/Series.vue';

export default [
    {path: '/', name: 'root', component: () => import('@/pages/Home') },
    {path: '/character-lineup', name: 'index.lineup', component: () => import('@/components/CharacterLineup')},
    {path: '/character-lineup/:id', name: 'show.lineup', component: Character},
    {path: '/browse-games', component: BrowseGames},
    {path: '/browse-games/:game', component: Game},
    {path: '/browse-series', component: BrowseSeries},
    {path: '/browse-series/:serie', component: Series},
]