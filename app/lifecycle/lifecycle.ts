import {LifecycleChild} from './lifecycle-child'
import {Component} from 'angular2/core';
@Component({
	template: `
	  <div>
	  	<p>Component Lifecycle</p>
	    <button (click)="toggleChild()">
	      {{hasChild ? 'Delete' : 'Create'}} Child
	    </button>
	    <button (click)="updateChild()" [hidden]="!hasChild">Update Child</button>
	    <child-comp *ngIf="hasChild" [hooks]="hooks">
	    </child-comp>
	    <p *ngFor="#log of hooks; #i = index"> #{{i+1}} - {{log}}</p>
	  </div>
  	`,
	directives: [LifecycleChild]
})
export class LifeCycle {
	hasChild: boolean = false;
	hooks: string[] = [];

	toggleChild() {
		this.hasChild = !this.hasChild;
		setTimeout(() => { }, 0);
	}

	updateChild() {
		this.hooks = this.hooks.splice(0);
		setTimeout(() => { }, 0);
	}
}