import { Component } from '@angular/core';
import { faExplosion } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  explosion = faExplosion
  yearsOfExperience:any;
  roundedYearsOfExperience:any
  remainingMonths:any

  constructor(){
    const startDate = new Date('2022-01-24');
    const currentDate = new Date();
    const difference = currentDate.getTime() - startDate.getTime();
    this. yearsOfExperience = difference / (1000 * 3600 * 24 * 365);
     this.roundedYearsOfExperience = Math.floor(this.yearsOfExperience);
    this.remainingMonths = Math.floor((this.yearsOfExperience - this.roundedYearsOfExperience) * 12);
  }
  

}
