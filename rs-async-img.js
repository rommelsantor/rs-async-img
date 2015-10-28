angular.module('myModuleName').directive('rsAsyncImg', function($q) {
  return {
    restrict: 'E',
    template: function(element, attrs) {
      return '<em>' + (attrs.alt || 'loading...') + '</em>';
    },
    link: function(scope, element, attrs) {
      var promise = $q(function(resolve, reject) {
        var img = new Image();

        img.onload = function() {
          resolve(img);
        };

        img.onerror = function() {
          reject();
        };

        img.src = attrs.src;
      });

      promise.then(function(img) {
        element.html('').append(img);
      });
    }
  };
});
