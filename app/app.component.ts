import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Interpolation v. Property Binding in Angular';
  example1 = 'https://repl.it/@lbouthillier/Middleware-Making-';
}
