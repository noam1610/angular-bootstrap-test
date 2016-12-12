'use strict';
var controllername = 'tris';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = ['$scope'];

    function controller($scope) {
        var vm = this;
        vm.controllername = fullname;

        $scope.today = function() {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.inlineOptions = {
            minDate: new Date()
        };

        $scope.dateOptions = {
            formatYear: 'yy',
            minDate: new Date(),
            startingDay: 1
        };

        $scope.toggleMin = function() {
            $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
            $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
        };

        $scope.toggleMin();

        $scope.open1 = function() {
            $scope.popup1.opened = true;
        };

        $scope.format = 'dd-MMMM-yyyy';

        $scope.popup1 = {
            opened: false
        };

    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
