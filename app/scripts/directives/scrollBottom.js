(function() {
	function scrollBottom() {

    return {
      scope: {
        scrollBottom: "="
      },
       link: function (scope, element) {
         scope.$watchCollection('scrollBottom', function (newValue) {
           if (newValue)
           {
             $(element).scrollTop($(element)[0].scrollHeight);
           }
         });
       }
     }
   }

angular
		.module('blocChat')
		.directive('scrollBottom', [scrollBottom]);
})();
