System.register(['aurelia-auth', 'aurelia-framework'], function (_export) {
    'use strict';

    var AuthService, inject, Login;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaAuth) {
            AuthService = _aureliaAuth.AuthService;
        }, function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }],
        execute: function () {
            Login = (function () {
                function Login(auth) {
                    _classCallCheck(this, _Login);

                    this.auth = auth;
                }

                _createClass(Login, [{
                    key: 'authenticate',
                    value: function authenticate(name) {
                        return this.auth.authenticate(name, false, null).then(function (response) {
                            console.log("auth response " + response);
                        });
                    }
                }]);

                var _Login = Login;
                Login = inject(AuthService)(Login) || Login;
                return Login;
            })();

            _export('Login', Login);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs2QkFJYSxLQUFLOzs7Ozs7Ozt1Q0FKVixXQUFXOzt1Q0FDWCxNQUFNOzs7QUFHRCxpQkFBSztBQUNILHlCQURGLEtBQUssQ0FDRixJQUFJLEVBQUM7OztBQUNiLHdCQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztpQkFDcEI7OzZCQUhRLEtBQUs7OzJCQUtGLHNCQUFDLElBQUksRUFBQztBQUNkLCtCQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQy9DLElBQUksQ0FBQyxVQUFDLFFBQVEsRUFBRztBQUNkLG1DQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxDQUFDO3lCQUM1QyxDQUFDLENBQUM7cUJBQ047Ozs2QkFWUSxLQUFLO0FBQUwscUJBQUssR0FEakIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUNQLEtBQUssS0FBTCxLQUFLO3VCQUFMLEtBQUsiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICdhdXJlbGlhLWF1dGgnO1xyXG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuQGluamVjdChBdXRoU2VydmljZSlcclxuZXhwb3J0IGNsYXNzIExvZ2lue1xyXG4gICAgY29uc3RydWN0b3IoYXV0aCl7XHJcbiAgICAgICAgdGhpcy5hdXRoID0gYXV0aDtcclxuICAgIH07XHJcblxyXG4gICAgYXV0aGVudGljYXRlKG5hbWUpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF1dGguYXV0aGVudGljYXRlKG5hbWUsIGZhbHNlLCBudWxsKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSk9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhdXRoIHJlc3BvbnNlIFwiICsgcmVzcG9uc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
