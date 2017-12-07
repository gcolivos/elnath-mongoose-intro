app.controller('GameController', ['GameService', function(GameService){
    var self = this;
    self.message = 'Ready for some games??';
    self.games = GameService.games;
    self.addNewGame = GameService.addNewGame
    self.newGame = GameService.newGame
    console.log(self.games);
}]);