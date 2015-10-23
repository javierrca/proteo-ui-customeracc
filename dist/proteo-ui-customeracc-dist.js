angular.module('proteo.ui.customeracc',[]);

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

angular.module('proteo.ui.customeracc').controller('customerAccCtrl', function($scope,personService) {

		$scope.getCustomerFullName= function () {
			return "Sr." + personService.getFullname($scope.customerInfo);
		};

		$scope.onCustValidate= function (account) {
			$scope.onValidateAccount({custAccount:account});
		};
});

angular.module('proteo.ui.customeracc').service('personService', function () {
      this.getFullname = function(customer){return customer.firstName+ ' ' + customer.lastName;};
  });

angular.module('proteo.ui.customeracc').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('src/customeracc.tpl.html',
    "<div style=\"width:500px;border:1px solid #ddd; text-align:left;padding: 10px;\">\r" +
    "\n" +
    "  <p/><label> Name:</label> {{getCustomerFullName()}}</p>\r" +
    "\n" +
    "  <p><label> Account-1:</label> {{customerInfo.account1}} <button ng-click=\"onCustValidate(customerInfo.account1)\">validate</button> </p>\r" +
    "\n" +
    "  <p><label> Account-2:</label> {{customerInfo.account2}} <button ng-click=\"onCustValidate(customerInfo.account2)\">validate</button></p>\r" +
    "\n" +
    "  </br>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );

}]);
