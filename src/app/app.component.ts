import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*template: `
    <h1>
      Welcome {{title}}
    </h1>
  `,*/
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "ToDo-App";
}
