var navCtrl = app.controller('navCtrl', ['Entry' ,function($scope, $rootScope, $routeParams, $location, $filter,$http,Entry) {
    $scope.homeitems = [{
        nameid: 'ford_1',
        src: 'img/puzzle/casa3x2/fiesta/Ford_Original.png',
        car: 'fiesta'
    }, {
        nameid: 'ford_2',
        src: 'img/puzzle/casa3x2/focus/Ford_Original.png',
        car: 'focus'
    }, {
        nameid: 'ford_3',
        src: 'img/puzzle/casa3x2/fusion/Ford_Original.png',
        car: 'fusion'
    }, {
        nameid: 'ford_4',
        src: 'img/puzzle/casa3x2/mustang/Ford_Original.png',
        car: 'mustang'
    }];

    $scope.query = {}
    $scope.queryBy = '$'



    /*$http.get("assets/api/data.json")
     $http.get("https://raw.githubusercontent.com/muthuraman393/webmail/c37e178dd978af03b09fddfc35b388a79d0e5cc6/data.json")
    .then(function(response) {
        $scope.list2 = response.data;
    });*/

    var entries = Entry.query(function() {
    console.log(entries);
    $scope.list2 = entries;
     }); //query() returns all the entries

    $scope.list2 = response.data;

    angular.forEach($scope.list2, function(item) {
        item.Selected = false;
    });

    $scope.visiblecompose = true; //to true
    $scope.visiblepencil = false;
    $scope.visiblecross = true;
    $scope.visibleinnermail = true;
    $scope.visibleinnermailopensend = true;
    $scope.tickboxunselected = false;
    $scope.toreplyclass = false;



    $scope.composeopen = function() {
        $scope.visiblecompose = true; //to false

        if ($scope.visiblecross == false && $scope.visiblepencil == true) {
            $scope.visiblepencil = false;
            $scope.visiblecross = true;

        } else {
            $scope.visiblecross = false;
            $scope.visiblepencil = true;
            $scope.visiblecompose = false;

        }

    };
    $scope.composeclose = function() {
        //$scope.visiblecompose = true;
    };

    $scope.innermailopen = function() {
        $scope.visibleinnermail = false;

    };
    $scope.innermailclose = function() {
        $scope.visibleinnermail = true;

    };
    $scope.stateChanged = function(tickid, qId) {
        if ($scope.list2[tickid - 1].Selected == false) {
            //alert('test'+$scope.list2[tickid-1].Selected+'_innermail'+$scope.visibleinnermail);
            $scope.visibleinnermailopensend = true;
            $scope.toreplyclass = false;
            var falsecount = 0;

            angular.forEach($scope.list2, function(item) { /*to check uncheck master*/
                if (item.Selected == true) {
                    $scope.tickboxunselected = true;
                    return false;
                } else {
                    falsecount = falsecount + 1;

                    if (falsecount == $scope.list2.length) {
                        $scope.tickboxunselected = false;
                        $scope.selectedAll = false;
                    }
                }
            });

        }
        if ($scope.list2[tickid - 1].Selected == true) {
            $scope.visibleinnermailopensend = false;
            $scope.toreplyclass = true;

            angular.forEach($scope.list2, function(item) { /*to check uncheck master*/
                if (item.Selected == true) {
                    $scope.tickboxunselected = true;
                    return false;
                } else {
                    falsecount = falsecount + 1;

                    if (falsecount == $scope.list2.length) {
                        $scope.tickboxunselected = false;
                        $scope.selectedAll = false;
                    }
                }
            });

        }
    };




    /* 		$scope.innermailopensend = function() {
            $scope.visibleinnermailopensend = $scope.visibleinnermailopensend?false:true;
            }; */

    $scope.checkAll = function() {
        $scope.tickboxunselected = false;
        if ($scope.selectedAll) {
            //alert('if'+$scope.selectedAll);
            $scope.selectedAll = false;
        } else {
            //alert('else'+$scope.selectedAll);
            $scope.selectedAll = true;
        }
        angular.forEach($scope.list2, function(item) {
            item.Selected = $scope.selectedAll;
        });

    };


}]);