import { Component } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  

  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }

}
