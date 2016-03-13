import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AboutUs} from './about-us';
import {Mission} from './mission.ts';

@Component({
    selector: 'my-app',
    template: `
     <h1>Bootsrapping Angular</h1>
	   <nav>
	    <a [routerLink]="['Mission']">Mission & Vision</a>
	    <a [routerLink]="['About']">About Us</a>
	   </nav>
	   <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
 	{ path: '/mission', name: 'Mission', component: Mission },
 	{ path: '/about-us', name: 'About', component: AboutUs }
])
export class AppComponent { }