import 'angular2-universal/polyfills';

import {bootstrap, BROWSER_ROUTER_PROVIDERS, BROWSER_HTTP_PROVIDERS} from 'angular2-universal';
import {AppComponent} from './appcomponent'

bootstrap(AppComponent, [
	...BROWSER_ROUTER_PROVIDERS,
	...BROWSER_HTTP_PROVIDERS
]);