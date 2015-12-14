System.register(['bootstrap', 'aurelia-auth', 'aurelia-framework', 'aurelia-auth/app.httpClient.config'], function (_export) {
  'use strict';

  var AuthorizeStep, FetchConfig, inject, HttpClientConfig, App;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_bootstrap) {}, function (_aureliaAuth) {
      AuthorizeStep = _aureliaAuth.AuthorizeStep;
      FetchConfig = _aureliaAuth.FetchConfig;
    }, function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaAuthAppHttpClientConfig) {
      HttpClientConfig = _aureliaAuthAppHttpClientConfig['default'];
    }],
    execute: function () {
      App = (function () {
        function App(fetchConfig, httpClientConfig) {
          _classCallCheck(this, _App);

          this.fetchConfig = fetchConfig;
          this.httpClientConfig = httpClientConfig;
        }

        _createClass(App, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.title = 'Aurelia Asp.net Authentication Sample';
            config.options.pushState = true;
            config.addPipelineStep('authorize', AuthorizeStep);
            config.map([{ route: [''], name: 'shell', moduleId: 'shell', nav: true, title: 'home', auth: true }, { route: ['login'], name: 'login', moduleId: 'login' }, { route: ['logout'], name: 'logout', moduleId: 'logout' }, { route: ['profile'], name: 'profile', moduleId: 'profile', auth: true }]);

            this.router = router;
          }
        }, {
          key: 'activate',
          value: function activate() {
            this.fetchConfig.configure();
            this.httpClientConfig.configure();
          }
        }]);

        var _App = App;
        App = inject(FetchConfig, HttpClientConfig)(App) || App;
        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NERBUWEsR0FBRzs7Ozs7Ozs7bUNBTlIsYUFBYTtpQ0FFYixXQUFXOztpQ0FEWCxNQUFNOzs7OztBQUtELFNBQUc7QUFFSCxpQkFGQSxHQUFHLENBRUYsV0FBVyxFQUFFLGdCQUFnQixFQUFFOzs7QUFDekMsY0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFDL0IsY0FBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1NBQzFDOztxQkFMVSxHQUFHOztpQkFPQyx5QkFBQyxNQUFNLEVBQUUsTUFBTSxFQUFFO0FBQzlCLGtCQUFNLENBQUMsS0FBSyxHQUFHLHVDQUF1QyxDQUFDO0FBQ3ZELGtCQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDaEMsa0JBQU0sQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQ25ELGtCQUFNLENBQUMsR0FBRyxDQUFDLENBQ1QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFDdkYsRUFBRSxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsRUFDdEQsRUFBRSxLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsRUFDekQsRUFBRSxLQUFLLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUN6RSxDQUFDLENBQUM7O0FBRUgsZ0JBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1dBQ3RCOzs7aUJBRU8sb0JBQUU7QUFDTixnQkFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUM3QixnQkFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxDQUFDO1dBQ3JDOzs7bUJBeEJVLEdBQUc7QUFBSCxXQUFHLEdBRGYsTUFBTSxDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUN6QixHQUFHLEtBQUgsR0FBRztlQUFILEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCAnYm9vdHN0cmFwJztcclxuaW1wb3J0IHtBdXRob3JpemVTdGVwfSBmcm9tICdhdXJlbGlhLWF1dGgnO1xyXG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0ZldGNoQ29uZmlnfSBmcm9tICdhdXJlbGlhLWF1dGgnO1xyXG5pbXBvcnQgSHR0cENsaWVudENvbmZpZyBmcm9tICdhdXJlbGlhLWF1dGgvYXBwLmh0dHBDbGllbnQuY29uZmlnJztcclxuXHJcbkBpbmplY3QoRmV0Y2hDb25maWcsIEh0dHBDbGllbnRDb25maWcpXHJcbmV4cG9ydCBjbGFzcyBBcHAge1xyXG5cclxuICBjb25zdHJ1Y3RvcihmZXRjaENvbmZpZywgaHR0cENsaWVudENvbmZpZykge1xyXG4gICAgdGhpcy5mZXRjaENvbmZpZyA9IGZldGNoQ29uZmlnO1xyXG4gICAgdGhpcy5odHRwQ2xpZW50Q29uZmlnID0gaHR0cENsaWVudENvbmZpZztcclxuICB9XHJcblxyXG4gIGNvbmZpZ3VyZVJvdXRlcihjb25maWcsIHJvdXRlcikge1xyXG4gICAgY29uZmlnLnRpdGxlID0gJ0F1cmVsaWEgQXNwLm5ldCBBdXRoZW50aWNhdGlvbiBTYW1wbGUnO1xyXG4gICAgY29uZmlnLm9wdGlvbnMucHVzaFN0YXRlID0gdHJ1ZTtcclxuICAgIGNvbmZpZy5hZGRQaXBlbGluZVN0ZXAoJ2F1dGhvcml6ZScsIEF1dGhvcml6ZVN0ZXApO1xyXG4gICAgY29uZmlnLm1hcChbXHJcbiAgICAgIHsgcm91dGU6IFsnJ10sIG5hbWU6ICdzaGVsbCcsIG1vZHVsZUlkOiAnc2hlbGwnLCBuYXY6IHRydWUsIHRpdGxlOiAnaG9tZScsIGF1dGg6IHRydWUgfSxcclxuICAgICAgeyByb3V0ZTogWydsb2dpbiddLCBuYW1lOiAnbG9naW4nLCBtb2R1bGVJZDogJ2xvZ2luJyB9LFxyXG4gICAgICB7IHJvdXRlOiBbJ2xvZ291dCddLCBuYW1lOiAnbG9nb3V0JywgbW9kdWxlSWQ6ICdsb2dvdXQnIH0sXHJcbiAgICAgIHsgcm91dGU6IFsncHJvZmlsZSddLCBuYW1lOiAncHJvZmlsZScsIG1vZHVsZUlkOiAncHJvZmlsZScsIGF1dGg6IHRydWUgfVxyXG4gICAgXSk7XHJcblxyXG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIGFjdGl2YXRlKCl7XHJcbiAgICAgIHRoaXMuZmV0Y2hDb25maWcuY29uZmlndXJlKCk7XHJcbiAgICAgIHRoaXMuaHR0cENsaWVudENvbmZpZy5jb25maWd1cmUoKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
