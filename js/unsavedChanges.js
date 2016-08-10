(function () {  

    'user strict';

    angular
    .module('unsavedChanges', [])
    .directive('leavingPage', LeavingPage);

    LeavingPage.$inject = ['$rootScope', '$location'];

    function LeavingPage($rootScope, $location) {

        var directive = {
            restrict: 'A',
            scope: {
                leavingPageMessage: '@leavingPageMessage'
            },
            link: link
        };

        return directive;

        function link (scope, element, attrs, controller) {
            function showAlert () {
                window.onbeforeunload = function(e) {
                    var formInputs = $(element).find("[unsaved-element]");
                    var inputs = $(formInputs);
                    
                    for (var i = inputs.length - 1; i >= 0; i--) {

                        var model = angular.element(inputs[i]).controller('ngModel');
                        
                        if(model.$isChanged && model.$dirty) {

                            dialogText = scope.leavingPageMessage
                            e.returnValue = scope.leavingPageMessage;
                            return dialogText;

                        }
                    }
                };
            };
            
            $rootScope.$on("$locationChangeStart", function (event) {
                    var msg = window.onbeforeunload(event);
                    if (msg) {
                        var r = confirm(msg);
                        if (!r) {
                            event.preventDefault();
                        }
                    } 
            });
            //init
            showAlert();
        }
    }
})();


(function () {
    
    'use strict';
   
    angular
    .module('unsavedChanges')
    .directive('unsavedElement', UnsavedElement);

    UnsavedElement.$inject = ['$rootScope'];

    function UnsavedElement ($rootScope) {

        var directive = {
            restrict: 'A',
            link:     link,
            require:  'ngModel'
        }

        return directive;

        function link (scope, element, attrs, ngModel) {
            
            function isEmpty (val) {
                return ( val === undefined || val == null || val.length <= 0 ) ? null : val;
            }

            scope.$watch(attrs.ngModel, function (value) {
                
                value = isEmpty(value);

                //If the ngModel is touched or not
                if ( ngModel.$pristine ) {
                    ngModel.$initialValue = value;
                }

                //value change?
                ngModel.$isChanged = !( value == ngModel.$initialValue );


            });
        }
    }
})();