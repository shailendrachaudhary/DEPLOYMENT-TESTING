import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestingService } from "./testing.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers :[TestingService]
})
export class AppComponent {
  title = 'deployment-testing';
  constructor(private testingService : TestingService){
   this.fetchTestingDAta() 
  }

  fetchTestingDAta(){
    this.testingService.testingAPI().subscribe((res: any) => {
      console.log("@@@@@@@@ ", res);
    })
  }
}
