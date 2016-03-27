import {LifecycleChild} from './lifecycle-child'
import {Component} from 'angular2/core';
@Component({
	template: `
	  <div>
	    <h2>Angular2 lifecycle hooks and their sequence</h2>
	    <button (click)="toggleChild()">
	      {{hasChild ? 'Delete' : 'Create'}} Child
	    </button>
	    <button (click)="updateChild()" [hidden]="!hasChild">Update Child</button>
	    <child-comp *ngIf="hasChild" [time]="time" [hooks]="hooks">
	    </child-comp>
	    <div *ngFor="#msg of hooks">{{msg}}</div>
	  </div>
  	`,
	directives: [LifecycleChild]
})
export class LifeCycle {
	hasChild: boolean = false;
	hooks: string[] = [];
	time: Date = new Date();
	
	toggleChild() {
		this.hasChild = !this.hasChild;
		if (this.hasChild) {
			this.hooks = [];
		}
		setTimeout(() => {}, 0);
	}

	updateChild() {
		this.time = new Date();
		setTimeout(() => { }, 0);
	}
}