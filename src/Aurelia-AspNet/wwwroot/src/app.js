
import 'bootstrap';
import {AuthorizeStep} from 'aurelia-auth';
import {inject} from 'aurelia-framework';
import {FetchConfig} from 'aurelia-auth';
import HttpClientConfig from 'aurelia-auth/app.httpClient.config';

@inject(FetchConfig, HttpClientConfig)
export class App {

  constructor(fetchConfig, httpClientConfig) {
    this.fetchConfig = fetchConfig;
    this.httpClientConfig = httpClientConfig;
  }

  configureRouter(config, router) {
    config.title = 'Aurelia Asp.net Authentication Sample';
    config.options.pushState = true;
    config.addPipelineStep('authorize', AuthorizeStep);
    config.map([
      { route: [''], name: 'shell', moduleId: 'shell', nav: true, title: 'home', auth: true },
      { route: ['login'], name: 'login', moduleId: 'login' },
      { route: ['logout'], name: 'logout', moduleId: 'logout' },
      { route: ['profile'], name: 'profile', moduleId: 'profile', auth: true }
    ]);

    this.router = router;
  }
  
  activate(){
      this.fetchConfig.configure();
      this.httpClientConfig.configure();
  }
}
