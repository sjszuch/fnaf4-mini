import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'intervals';


  // Main timer- to be moved to seperate component
  timeLeft: number = 0;
  timeToRand: number = 0;

  interval: number = 0;
  subscribeTimer: any;


  startTimer() {
    this.interval = setInterval(() => {
        this.timeLeft+=30;

        // This will call the randomly generated number function every x seconds then reset
        if(this.timeToRand <= 2) {
          this.timeToRand++;
        }
        else {
          this.randomGen(400, 499);
          this.timeToRand = 0;
        }



    },1000)
  }


  // Random number generator, generates a number between 400 and 499 every 2 seconds
  randomCheck: number = 499;
  randomGen(min: number, max:number) {
    this.randomCheck = Math.floor(Math.random() * (max - min + 1) + min);
  }

  // Check IF main timer is GREATER than the randomly generated interval to determine movement
}
