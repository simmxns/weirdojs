import Route from '@ioc:Adonis/Core/Route';

Route.get('/api/leaderboard', 'GetControllers.getLeaderboard');
Route.post('/api/leaderboard', 'PostControllers.addPlayer');
Route.put('/api/leaderboard', 'PutControllers.updatePlayer');
