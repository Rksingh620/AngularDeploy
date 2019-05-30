import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'deploy';
  name = 'Rohit Singh';
  values = '';
  onKey(value: string) {
    this.values += value + ' | ';
  }
}
