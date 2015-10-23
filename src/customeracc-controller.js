angular.module('proteo.ui.customeracc').controller('customerAccCtrl', function($scope,personService) {

		this.getCustomerFullName= function () {
			return "Sr." + personService.getFullname($scope.customerInfo);
		};

		$scope.onCustValidate= function (account) {
			$scope.onValidateAccount({custAccount:account});
		};
});
