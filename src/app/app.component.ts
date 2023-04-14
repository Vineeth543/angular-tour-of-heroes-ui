import { Component } from '@angular/core';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeroesComponent } from './component/heroes/heroes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hero-app';
}
