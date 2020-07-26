export default [
    {path: '/', name: 'root', component: () => import('@/pages/Home')},
    {path: '/character-lineup', name: 'index.lineup', component: () => import('@/pages/CharacterLineup')},
    {path: '/browse-games', name: 'index.games', component: () => import('@/pages/BrowseGames')},
    {path: '/browse-series', name: 'index.series', component: () => import('@/pages/BrowseSeries')},
    {path: '/character-lineup/:id', name: 'char.details', component: () => import('@/components/Character')},
    {path: '/browse-games/:game', name: 'game.details', component: () => import('@/components/Game')},
    {path: '/browse-series/:serie', name: 'series.details', component: () => import('@/components/Series')},
]