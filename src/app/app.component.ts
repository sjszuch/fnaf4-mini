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
    this.movementCheck();
  }

  // Check IF main timer is GREATER than the randomly generated interval to determine movement
  position: number = 0;
  movementCheck() {
    if(this.timeLeft >= this.randomCheck) {
      this.positionMovement();
      this.timeLeft = 200;
    }
  }

  positionMovement() {
    if(this.position == 1) {
      this.position = Math.floor(Math.random() * (3 - 2 + 1) + 2);
    }
    else if (this.position == 4) {
      this.position = Math.floor(Math.random() * (6 - 5 + 1) + 5);
    }
    else if (this.position == 2 || this.position == 5) {
      this.position+=2;
    }
    else {
      this.position++;
    }
  }



  // Called when light button is pressed
  onLight() {
    this.timeLeft = 0;
    if(this.position == 1 || this.position == 4) {
      this.position = 0;
    }

    if(this.position == 7) {
      // Reroute to win screen
      console.log("Win");
    }
  }
}
