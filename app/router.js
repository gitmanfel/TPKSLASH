import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('teams', function() {
    this.route('team', {
      path: ':teamId'
    });
  });
  this.route('login');
});
