function AuthenticationDirective() {
  return {
    restrict: 'EA',
    templateUrl: 'directives/authentication.html',
    controller: 'AuthenticationCtrl'
  };
}

export default {
  name: 'authenticationDirective',
  fn: AuthenticationDirective
};
