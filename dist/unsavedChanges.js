!function(){"user strict";function e(e,n){function a(n,a,i,t){function o(){window.onbeforeunload=function(e){for(var i=$(a).find("[unsaved-element]"),t=$(i),o=t.length-1;o>=0;o--){var r=angular.element(t[o]).controller("ngModel");if(r.$isChanged&&r.$dirty&&!n.changesSaved)return dialogText=n.leavingPageMessage,e.returnValue=n.leavingPageMessage,dialogText}}}e.$on("$locationChangeStart",function(e){var a=window.onbeforeunload(e);if(a&&!n.changesSaved){var i=confirm(a);i||e.preventDefault()}}),o()}var i={restrict:"A",scope:{leavingPageMessage:"@leavingPageMessage",changesSaved:"=changesSaved"},link:a};return i}angular.module("unsavedChanges",[]).directive("leavingPage",e),e.$inject=["$rootScope","$location"]}(),function(){"use strict";function e(e){function n(e,n,a,i){function t(e){return void 0===e||null==e||e.length<=0?null:e}e.$watch(a.ngModel,function(e){e=t(e),i.$pristine&&(i.$initialValue=e),i.$isChanged=!(e==i.$initialValue)})}var a={restrict:"A",link:n,require:"ngModel"};return a}angular.module("unsavedChanges").directive("unsavedElement",e),e.$inject=["$rootScope"]}();