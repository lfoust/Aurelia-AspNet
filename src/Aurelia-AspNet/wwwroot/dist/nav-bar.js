System.register(['aurelia-framework', 'aurelia-auth'], function (_export) {
  'use strict';

  var bindable, inject, AuthService, NavBar;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }, function (_aureliaAuth) {
      AuthService = _aureliaAuth.AuthService;
    }],
    execute: function () {
      NavBar = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(NavBar, [{
          key: 'router',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }], null, _instanceInitializers);

        function NavBar(auth) {
          _classCallCheck(this, _NavBar);

          this._isAuthenticated = false;

          _defineDecoratedPropertyDescriptor(this, 'router', _instanceInitializers);

          this.auth = auth;
        }

        _createDecoratedClass(NavBar, [{
          key: 'isAuthenticated',
          get: function get() {
            return this.auth.isAuthenticated();
          }
        }], null, _instanceInitializers);

        var _NavBar = NavBar;
        NavBar = inject(AuthService)(NavBar) || NavBar;
        return NavBar;
      })();

      _export('NavBar', NavBar);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3FDQUthLE1BQU07Ozs7Ozs7Ozs7bUNBTFgsUUFBUTtpQ0FDUixNQUFNOztpQ0FDTixXQUFXOzs7QUFHTixZQUFNOzs7OzhCQUFOLE1BQU07O3VCQUVoQixRQUFROzttQkFBVSxJQUFJOzs7OztBQUVaLGlCQUpBLE1BQU0sQ0FJTCxJQUFJLEVBQUU7OztlQUhsQixnQkFBZ0IsR0FBQyxLQUFLOzs7O0FBSXJCLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBRWpCOzs4QkFQVSxNQUFNOztlQVNFLGVBQUU7QUFDcEIsbUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztXQUNuQzs7O3NCQVhVLE1BQU07QUFBTixjQUFNLEdBRGxCLE1BQU0sQ0FBQyxXQUFXLENBQUUsQ0FDUixNQUFNLEtBQU4sTUFBTTtlQUFOLE1BQU0iLCJmaWxlIjoibmF2LWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZGFibGUgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJ2F1cmVsaWEtYXV0aCc7XHJcblxyXG5AaW5qZWN0KEF1dGhTZXJ2aWNlIClcclxuZXhwb3J0IGNsYXNzIE5hdkJhciB7XHJcbiAgX2lzQXV0aGVudGljYXRlZD1mYWxzZTtcclxuICBAYmluZGFibGUgcm91dGVyID0gbnVsbDtcclxuICBcclxuICBjb25zdHJ1Y3RvcihhdXRoICl7XHJcbiAgXHR0aGlzLmF1dGggPSBhdXRoO1xyXG5cclxuICB9XHJcblxyXG4gIGdldCBpc0F1dGhlbnRpY2F0ZWQoKXtcclxuICBcdHJldHVybiB0aGlzLmF1dGguaXNBdXRoZW50aWNhdGVkKCk7XHJcbiAgfVxyXG4gXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
