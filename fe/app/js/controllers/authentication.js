function AuthenticationCtrl($scope, Facebook) {
  'ngInject';

  $scope.login = () => Facebook.login($scope.getLoginStatus);
  $scope.logout = () => Facebook.logout($scope.getLoginStatus);

  $scope.getLoginStatus = () =>
    Facebook.getLoginStatus(response => {
      $scope.loggedIn = response.status === 'connected';
      $scope.$digest();
    });

  $scope.getLoginStatus();

  $scope.$watch('loggedIn', isLoggedIn => {
    if (isLoggedIn) {
      Facebook.api('/me?fields=name,picture', response => $scope.user = response);
    }
  })
}

export default {
  name: 'AuthenticationCtrl',
  fn: AuthenticationCtrl
};
