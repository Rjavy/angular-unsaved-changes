!function(){"user strict";function n(n,e){function i(e,i,t,a){function r(n,t){var a=$(i).find("[unsaved-element]");$(a).each(function(i,t){var a=angular.element($(t)).controller("ngModel");if(a.$isChanged&&a.$dirty){var r=confirm(e.leavingPageMessage);return r||n.preventDefault(),!1}})}var o=!0;n.$on("$locationChangeStart",function(n){o=!1,r(n)}),$(".sidebar").on("click","a",function(n){o?r(n):o=!0}),e.destroyUnsavedChanges=function(){e.$destroy()}}var t={restrict:"A",scope:{leavingPageMessage:"@leavingPageMessage"},link:i};return t}angular.module("unsavedChanges",[]).directive("leavingPage",n),n.$inject=["$rootScope","$location"]}(),function(){"use strict";function n(n){function e(n,e,i,t){function a(n){return void 0===n||null==n||n.length<=0?null:n}n.$watch(i.ngModel,function(n){n=a(n),t.$pristine&&(t.$initialValue=n),t.$isChanged=!(n==t.$initialValue)})}var i={restrict:"A",link:e,require:"ngModel"};return i}angular.module("unsavedChanges").directive("unsavedElement",n),n.$inject=["$rootScope"]}();