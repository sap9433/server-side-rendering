import {Component, Input} from 'angular2/core';

@Component({
  selector: 'child-comp',
  template: '<h6>Lifecycle hooks and their sequence</h6>'
})
// Don't HAVE to mention the Lifecycle Hook interfaces unless we want typing and tool support.
export class LifecycleChild  {
  @Input() hooks;

  ngOnInit() { this.hooks.push(`OnInit`); }

  // only called if there is an @input variable set by parent.
  ngOnChanges(changes) { this.hooks.push(`OnChanges: ${Object.keys(changes)}`); }

  // Called in every change detection cycle anywhere on the page
  ngDoCheck() { this.hooks.push(`DoCheck`); }

  ngAfterContentInit() { this.hooks.push(`AfterContentInit`); }

  // Called in every change detection cycle anywhere on the page
  ngAfterContentChecked() { this.hooks.push(`AfterContentChecked`); }

  ngAfterViewInit() { this.hooks.push(`AfterViewInit`); }

  // Called in every change detection cycle anywhere on the page
  ngAfterViewChecked() { this.hooks.push(`AfterViewChecked`); }

  ngOnDestroy() { this.hooks.push(`OnDestroy`); }
}