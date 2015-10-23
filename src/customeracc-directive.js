angular.module('proteo.ui.customeracc').directive('customerAcc',function() {
  return {
    scope:
    {
      customerInfo: '=',
      onValidateAccount:'&'
    },
    restrict: "E",
    controller: 'customerAccCtrl',
    templateUrl: 'common/directives/proteo-ui-customeracc/customeracc.tpl.html'

  };
});
