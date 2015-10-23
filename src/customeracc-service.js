angular.module('proteo.ui.customeracc').service('personService', function () {
      this.getFullname = function(customer){return customer.firstName+ ' ' + customer.lastName;};
  });
