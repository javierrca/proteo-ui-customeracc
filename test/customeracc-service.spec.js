describe('PersonServiceTest', function() {
    var scope, controller,scope;

	 beforeEach(module('proteo.ui.customeracc'));

   it('should contain an $personService service',
      inject(function(personService) {
     expect(personService).not.toBe(null);
    }));

    it('should get fullname properly',
        inject(['personService',function($person) {
        expect($person.getFullname({firstName:"Jose",lastName:"Perez"})).toBe("Jose Perez");

      }]));

});
