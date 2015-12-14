System.register(['aurelia-auth', 'aurelia-framework'], function (_export) {
	'use strict';

	var AuthService, inject, Logout;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_aureliaAuth) {
			AuthService = _aureliaAuth.AuthService;
		}, function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
		}],
		execute: function () {
			Logout = (function () {
				function Logout(authService) {
					_classCallCheck(this, _Logout);

					this.authService = authService;
				}

				_createClass(Logout, [{
					key: 'activate',
					value: function activate() {
						this.authService.logout("/login").then(function (response) {
							console.log("ok logged out on logout.js");
						})['catch'](function (err) {
							console.log("error logged out logout.js");
						});
					}
				}]);

				var _Logout = Logout;
				Logout = inject(AuthService)(Logout) || Logout;
				return Logout;
			})();

			_export('Logout', Logout);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ291dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7MEJBS2EsTUFBTTs7Ozs7Ozs7OEJBTFgsV0FBVzs7OEJBQ1gsTUFBTTs7O0FBSUQsU0FBTTtBQUNQLGFBREMsTUFBTSxDQUNOLFdBQVcsRUFBQzs7O0FBQ3ZCLFNBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0tBQy9COztpQkFIVyxNQUFNOztZQUtULG9CQUFFO0FBQ1YsVUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQ2hDLElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBRTtBQUNmLGNBQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztPQUMxQyxDQUFDLFNBQ0ksQ0FBQyxVQUFBLEdBQUcsRUFBRTtBQUNYLGNBQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztPQUUxQyxDQUFDLENBQUM7TUFDSDs7O2tCQWRXLE1BQU07QUFBTixVQUFNLEdBRGxCLE1BQU0sQ0FBQyxXQUFXLENBQUUsQ0FDUixNQUFNLEtBQU4sTUFBTTtXQUFOLE1BQU0iLCJmaWxlIjoibG9nb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnYXVyZWxpYS1hdXRoJztcclxuaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcblxyXG5AaW5qZWN0KEF1dGhTZXJ2aWNlIClcclxuZXhwb3J0IGNsYXNzIExvZ291dHtcclxuXHRjb25zdHJ1Y3RvcihhdXRoU2VydmljZSl7XHJcblx0XHR0aGlzLmF1dGhTZXJ2aWNlID0gYXV0aFNlcnZpY2U7XHJcblx0fTtcclxuXHRcclxuXHQgYWN0aXZhdGUoKXtcclxuXHRcdHRoaXMuYXV0aFNlcnZpY2UubG9nb3V0KFwiL2xvZ2luXCIpXHJcblx0XHQudGhlbihyZXNwb25zZT0+e1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIm9rIGxvZ2dlZCBvdXQgb24gbG9nb3V0LmpzXCIpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaChlcnI9PntcclxuXHRcdFx0Y29uc29sZS5sb2coXCJlcnJvciBsb2dnZWQgb3V0IGxvZ291dC5qc1wiKTtcclxuXHJcblx0XHR9KTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
