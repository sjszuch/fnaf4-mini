import { Component, HostListener } from '@angular/core';
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

      if(this.lightOn == false) {
        this.timeLeft+=30;
      }
      else {
        this.timeLeft = 0;
      }


        // This will call the randomly generated number function every x seconds then reset
        if(this.timeToRand <= 1) {
          this.timeToRand++;
        }
        else {

          if(this.position == 7) {
            // This is so that the last position only has a light opportunity of x seconds before fail
            this.randomGen(1, 30);
            this.timeToRand = 0;
          }
          else{
            this.randomGen(400, 499);
            this.timeToRand = 0;
          }

        }


        if(this.position == 8) {
          // Failure screen/reroute
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
  lightOn: boolean = false;

  // This is a placeholder variable to pass into the view component
  lightStatus: string = "Off";

  onLight() {
    if(this.lightOn == false) {
      this.lightStatus = "On";

      this.timeLeft = 0;

      if(this.position == 7) {
        // Reroute to win screen
        console.log("Win");
      }

      this.lightOn = true;
    }
    else {
      this.lightStatus = "Off";
      this.lightOn=false;
    }
  }

  // Image to display for each position
  toDisplay: string[] = [
    // Starting image
    "https://cdn.abcotvs.com/dip/images/24996_kgo-windows-bliss-040714-1280.jpg?w=1600",

    // Far hallway image
    "data:image/jpeg;base64,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",

    // Far left image
    "https://pbs-prod.linustechtips.com/monthly_2021_03/1647043410_LinusWindowsXP.png.52fed85d600faa323ec2fa515d1b3ff7.png",

    // Far right image
    "https://c8.alamy.com/comp/2HT9TTF/beautiful-landscape-view-of-green-hills-with-blue-sky-windows-xp-background-2HT9TTF.jpg",

    // Mid hallway image
    "https://c8.alamy.com/comp/2HT9TTF/beautiful-landscape-view-of-green-hills-with-blue-sky-windows-xp-background-2HT9TTF.jpg",

    // Close left image
    "https://c8.alamy.com/comp/2HT9TTF/beautiful-landscape-view-of-green-hills-with-blue-sky-windows-xp-background-2HT9TTF.jpg",

    // Close right image
    "https://c8.alamy.com/comp/2HT9TTF/beautiful-landscape-view-of-green-hills-with-blue-sky-windows-xp-background-2HT9TTF.jpg",

    // Final middle image
    "https://c8.alamy.com/comp/2HT9TTF/beautiful-landscape-view-of-green-hills-with-blue-sky-windows-xp-background-2HT9TTF.jpg"
  ]


  @HostListener('window:keyup', ['$event'])
keyEvent(event: KeyboardEvent) {
   this.onLight();
}

}
