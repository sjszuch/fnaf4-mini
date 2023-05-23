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

  startScreen: boolean = true;

  beginGame() {
    this.startScreen=false;
    this.startTimer();
  }

  startTimer() {


    this.interval = setInterval(() => {

      if(this.lightOn == false) {
        // CHANGE THIS FOR FASTER TESTING- SHOULD BE 30
        this.timeLeft+=120;
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
    this.playAudio("assets/sounds/deepfootsteps4.wav");

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
    this.playAudio("assets/sounds/flashlight.wav");

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
    "starting.webp",

    // Far hallway image
    "farhall.gif",

    // Far left image
    "farleft.webp",

    // Far right image
    "farright.webp",

    // Mid hallway image
    "./infront.jpg",

    // Close left image
    "closeleft.webp",

    // Close right image
    "closeright.webp",

    // Final middle image
  "closemiddle.webp"
  ]


  @HostListener('window:keyup', ['$event'])
keyEvent(event: KeyboardEvent) {

   this.onLight();
}


// Play flashlight sound
playAudio(sound: string){
  let audio = new Audio();
  audio.src = sound;
  audio.load();
  audio.play();
}
}
