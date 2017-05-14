function MainRouter ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('/', {
      url: '/',
      templateUrl: '../states/record.html'
    });










  $urlRouterProvider.otherwise('/');
}


angular
.module('RecordApp', ['ui.router','ngMaterial'])
.config(MainRouter);
