import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course_project';
  loadedFeature = 'recipe'

  onNavigate(feature: string){
    // console.log('feature: ', feature)
    // receives value sent on the featureSelected from header to app
    this.loadedFeature = feature;
  }
}
