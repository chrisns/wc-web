function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, FacebookProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('Home', {
      url: '/',
      controller: 'ExampleCtrl as home',
      templateUrl: 'home.html',
      title: 'Home'
    });

  $urlRouterProvider.otherwise('/');

  FacebookProvider.init('1802699439950274');

}

export default OnConfig;
