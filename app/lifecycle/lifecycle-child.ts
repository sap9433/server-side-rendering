import {Component, Input} from 'angular2/core';

@Component({
  selector: 'child-comp',
  template: '<p>Time now, {{time}}</p>'
})
// Don't HAVE to mention the Lifecycle Hook interfaces
// unless we want typing and tool support.
export class LifecycleChild  {
  @Input() time: Date;
  @Input() hooks;

  ngOnInit() { 
    this.hooks.push(`OnInit`);
  }

  // only called for/if there is an @input variable set by parent.
  ngOnChanges(changes) {this.hooks.push(`OnChanges: ${Object.keys(changes)}`);}

  // Called in every change detection cycle anywhere on the page
  ngDoCheck() { this.hooks.push(`DoCheck : gets called frequently`); }

  ngAfterContentInit() { this.hooks.push(`AfterContentInit`); }

  // Called in every change detection cycle anywhere on the page
  ngAfterContentChecked() { this.hooks.push(`AfterContentChecked : gets called frequently`); }

  ngAfterViewInit() { this.hooks.push(`AfterViewInit`); }

  // Called in every change detection cycle anywhere on the page
  ngAfterViewChecked() { this.hooks.push(`AfterViewChecked : gets called frequently`); }

  ngOnDestroy() { this.hooks.push(`OnDestroy`); }
}