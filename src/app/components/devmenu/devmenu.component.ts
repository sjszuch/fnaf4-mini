import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-devmenu',
  templateUrl: './devmenu.component.html',
  styleUrls: ['./devmenu.component.scss']
})
export class DevmenuComponent {
  @Input() lightOn!: any;
  @Input() timeLeft!: any;
  @Input() timeToRand!: any;
  @Input() randomCheck!: any;
  @Input() position!: any;
}
