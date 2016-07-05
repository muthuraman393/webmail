app.directive('resize', function($window) {
    return function(scope, element) {
        var w = angular.element($window);
        scope.getWindowDimensions = function() {
            return {
                'h': w.height(),
                'w': w.width()
            };
        };
        scope.$watch(scope.getWindowDimensions, function(newValue, oldValue) {
            scope.windowHeight = newValue.h;
            scope.windowWidth = newValue.w;

            scope.style = function() {
                return {
                    'height': (scope.windowHeight - 196) + 'px'
                };
            };
            scope.sidebarstyle = function() {
                return {
                    'height': (newValue.h - 60) + 'px'

                };
            };
            scope.mailcontentbarstyle = function() {
                return {
                    'height': (newValue.h / 2.7) + 'px'

                };
            };



        }, true);

        w.bind('resize', function() {
            scope.$apply();
        });
    }
})

/* app.directive('scrolltopheader', function() {
    return function(scope, element) {
        var w = angular.element($window);
        scope.gettopscrollheight = function() {
            return {
                'topscrolled': w.scrollTop()
            };
        };
        scope.$watch(scope.gettopscrollheight, function(newValue, oldValue) {
            scope.windowscrolledtop = newValue.topscrolled;

            scope.fixedheaderstyle = function() {
                return {
				    
                    'height': (newValue.topscrolled) + 'px'
                        
                };
            };

        }, true);

        w.bind('scroll', function() {
            scope.$apply();
        });
    }
}) */
app.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
        element.bind("scroll", function() {
             if (element.scrollTop() >= 100) {
                 scope.boolChangeClass = true;
                 console.log('Scrolled below header.');
				scope.style = function() {
					return {
						'height': (scope.windowHeight - 60) + 'px'
					};
                };
             } else {
                 scope.boolChangeClass = false;
                 console.log('Header is in view.');
             }
            scope.$apply();
        });
    };
});
app.directive('visible', function() {

    return {
        restrict: 'A',

        link: function(scope, element, attributes) {
            scope.$watch(attributes.visible, function(value) {
                element.css('visibility', value ? 'visible' : 'hidden');
            });
        }
    };
});
app.directive('stopEvent', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            element.bind('click', function(e) {
                e.stopPropagation();
            });
        }
    };
});

app.directive('mailTemplate', function() {

    return {
    restrict: 'E',
    scope: {
      customerInfo: '=info',list : '=datainfo'
    },
    templateUrl:'assets/partials/mailreadtemplate.html',
    link: function (scope, element, attrs) {
      scope.visibleinfo = attrs.visibleinfo;

    scope.innermailclose = function(index) {
        //alert(index+'close');console.log(scope.list[index]);
        scope.list[index].visibleinnerreadmail = 'close';

    };


      }
    };
});