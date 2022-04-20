import Route from '@ioc:Adonis/Core/Route'
import ctrl from 'App/Controllers/Http/barrel'

Route.get('/api/leaderboard', ctrl.getLeaderboard)
Route.post('/api/leaderboard', ctrl.addPlayer)
Route.put('/api/leaderboard', ctrl.updatePlayer)
