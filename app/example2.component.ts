import { Component, Input } from '@angular/core';

@Component({
  selector: 'example2',
  template: `<a href='https://www.youtube.com/watch?v=dQw4w9WgXc' target=_blank>Click me</a>`,
  styles: []
})
export class Example2Component  {
  @Input() ex2: string;
}