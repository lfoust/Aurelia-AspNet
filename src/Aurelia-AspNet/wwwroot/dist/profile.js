System.register(['aurelia-auth', 'aurelia-framework'], function (_export) {
	'use strict';

	var AuthService, inject, Profile;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_aureliaAuth) {
			AuthService = _aureliaAuth.AuthService;
		}, function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
		}],
		execute: function () {
			Profile = (function () {
				function Profile(auth) {
					_classCallCheck(this, _Profile);

					this.auth = auth;
					this.profile = null;
				}

				_createClass(Profile, [{
					key: 'activate',
					value: function activate() {
						var _this = this;

						return this.auth.getMe().then(function (data) {
							_this.profile = data;
						});
					}
				}, {
					key: 'link',
					value: function link(provider) {
						var _this2 = this;

						return this.auth.authenticate(provider, true, null).then(function () {
							return _this2.auth.getMe();
						}).then(function (data) {
							_this2.profile = data;
						});;
					}
				}, {
					key: 'unlink',
					value: function unlink(provider) {
						var _this3 = this;

						return this.auth.unlink(provider).then(function () {
							return _this3.auth.getMe();
						}).then(function (data) {
							_this3.profile = data;
						});;
					}
				}]);

				var _Profile = Profile;
				Profile = inject(AuthService)(Profile) || Profile;
				return Profile;
			})();

			_export('Profile', Profile);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzBCQUlhLE9BQU87Ozs7Ozs7OzhCQUpaLFdBQVc7OzhCQUNYLE1BQU07OztBQUdELFVBQU87QUFFUixhQUZDLE9BQU8sQ0FFUCxJQUFJLEVBQUM7OztBQUNoQixTQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixTQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztLQUNwQjs7aUJBTFcsT0FBTzs7WUFPWCxvQkFBRzs7O0FBQ1YsYUFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUN2QixJQUFJLENBQUMsVUFBQSxJQUFJLEVBQUU7QUFDWCxhQUFLLE9BQU8sR0FBRyxJQUFJLENBQUM7T0FDcEIsQ0FBQyxDQUFDO01BQ0g7OztZQUVHLGNBQUMsUUFBUSxFQUFFOzs7QUFDZCxhQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBS2xELElBQUksQ0FBQztjQUFLLE9BQUssSUFBSSxDQUFDLEtBQUssRUFBRTtPQUFBLENBQUMsQ0FDNUIsSUFBSSxDQUFDLFVBQUEsSUFBSSxFQUFFO0FBQ1gsY0FBSyxPQUFPLEdBQUcsSUFBSSxDQUFDO09BQ3BCLENBQUMsQ0FBQyxDQUFDO01BQ0o7OztZQUVLLGdCQUFDLFFBQVEsRUFBRTs7O0FBQ2hCLGFBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBS2hDLElBQUksQ0FBQztjQUFLLE9BQUssSUFBSSxDQUFDLEtBQUssRUFBRTtPQUFBLENBQUMsQ0FDNUIsSUFBSSxDQUFDLFVBQUEsSUFBSSxFQUFFO0FBQ1gsY0FBSyxPQUFPLEdBQUcsSUFBSSxDQUFDO09BQ3BCLENBQUMsQ0FBQyxDQUFDO01BQ0o7OzttQkFwQ1csT0FBTztBQUFQLFdBQU8sR0FEbkIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUNQLE9BQU8sS0FBUCxPQUFPO1dBQVAsT0FBTyIsImZpbGUiOiJwcm9maWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnYXVyZWxpYS1hdXRoJztcclxuaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbkBpbmplY3QoQXV0aFNlcnZpY2UpXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxle1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKGF1dGgpe1xyXG5cdFx0dGhpcy5hdXRoID0gYXV0aDtcclxuXHRcdHRoaXMucHJvZmlsZSA9IG51bGw7XHJcblx0fTtcclxuXHRcclxuXHRhY3RpdmF0ZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmF1dGguZ2V0TWUoKVxyXG5cdFx0LnRoZW4oZGF0YT0+e1xyXG5cdFx0XHR0aGlzLnByb2ZpbGUgPSBkYXRhO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdFxyXG5cdGxpbmsocHJvdmlkZXIpIHtcclxuXHRcdHJldHVybiB0aGlzLmF1dGguYXV0aGVudGljYXRlKHByb3ZpZGVyLCB0cnVlLCBudWxsKVxyXG5cdFx0LyoudGhlbigocmVzcG9uc2UpPT57XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiYXV0aCByZXNwb25zZSBcIiArIHJlc3BvbnNlKTtcclxuXHRcdFx0cmV0dXJuIHRoaXMuYXV0aC5nZXRNZSgpO1xyXG5cdFx0fSkqL1xyXG5cdFx0LnRoZW4oKCk9PiB0aGlzLmF1dGguZ2V0TWUoKSlcclxuXHRcdC50aGVuKGRhdGE9PntcclxuXHRcdFx0dGhpcy5wcm9maWxlID0gZGF0YTtcclxuXHRcdH0pOztcclxuXHR9XHJcblx0XHJcblx0dW5saW5rKHByb3ZpZGVyKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5hdXRoLnVubGluayhwcm92aWRlcilcclxuXHRcdC8qLnRoZW4oKHJlc3BvbnNlKT0+e1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcImF1dGggcmVzcG9uc2UgXCIgKyByZXNwb25zZSk7XHJcblx0XHRcdHJldHVybiB0aGlzLmF1dGguZ2V0TWUoKTtcclxuXHRcdH0pKi9cclxuXHRcdC50aGVuKCgpPT4gdGhpcy5hdXRoLmdldE1lKCkpXHJcblx0XHQudGhlbihkYXRhPT57XHJcblx0XHRcdHRoaXMucHJvZmlsZSA9IGRhdGE7XHJcblx0XHR9KTs7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
