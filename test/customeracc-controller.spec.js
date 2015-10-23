describe('CustomerAccControllerTest', function() {
    var scope, controller,scope;

	 beforeEach(module('proteo.ui.customeracc'));

    beforeEach(inject(function ($controller,$rootScope) {
        scope = $rootScope.$new();

		    controller = $controller('customerAccCtrl', {
  		      $scope: scope
  		  });

    }));

    it('should have a method to check if the path is active', function() {
      scope.customerInfo ={firstName:"Jose",lastName:"Perez"};
		  var result =controller.getCustomerFullName();
		  expect(result).toBe("Sr.Jose Perez");
    });
});
