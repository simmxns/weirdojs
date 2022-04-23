import Route from '@ioc:Adonis/Core/Route';

Route.get('/api/leaderboard', 'GetControllers.show');
Route.post('/api/leaderboard', 'PostControllers.store');
Route.put('/api/leaderboard/:id', 'PutControllers.update');
