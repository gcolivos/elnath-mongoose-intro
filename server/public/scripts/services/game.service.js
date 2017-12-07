app.service('GameService', ['$http', function($http){
    var self = this; //self refers to the service, NOT what is going on with the controller
    //inside the controller, self refers to the controller. Self is whatever it's inside of.

    self.games = {list: [] }; //this is the other side of the company.controller 
    //reference of (self.companies=CompanyService.companies)

    self.newGame = {}; //need to bring along newCompany via controller and definie it so that you can
    //clear the fields below at the end of the addNewCompany call

    self.getGames = function () { //and then this is the section that refers to the AJAX request to
        //companies.js route, which then feeds into the database
        console.log("in getGames function in the right spot");
        $http({
            method: 'GET',
            url: '/game'
        }).then(function (response) {
            console.log('response', response);
            self.games.list = response.data;
        });
    };

    // self.addNewCompany = function (newCompany) {
    //     console.log(newCompany);
    //     $http({
    //         method: 'POST',
    //         url: '/companies',
    //         data: newCompany
    //     }).then(function (response) {
    //         console.log('response', response);
    //         self.getCompanies();
    //         self.newCompany.name = '';
    //         self.newCompany.country = '';
    //     });
    // }
    
    self.getGames();   //don't forget to call the function!
}]);