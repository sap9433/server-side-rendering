import {bootstrap, BROWSER_ROUTER_PROVIDERS, BROWSER_HTTP_PROVIDERS} from 'angular2-universal';
import {AppComponent} from './app.component'

bootstrap(AppComponent, [
	...BROWSER_ROUTER_PROVIDERS,
	...BROWSER_HTTP_PROVIDERS
]);