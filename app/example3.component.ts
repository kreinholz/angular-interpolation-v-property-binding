import { Component, Input } from '@angular/core';

@Component({
  selector: 'example3',
  template: '{{ex3}}',
  styles: []
})
export class Example3Component  {
  @Input() ex3: string;
}