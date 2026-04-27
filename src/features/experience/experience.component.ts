import { Component, OnInit } from '@angular/core';
import { faExplosion } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  explosion = faExplosion
  yearsOfExperience: any;
  roundedYearsOfExperience: any
  remainingMonths: any

  constructor() {}
  ngOnInit(): void {
    const startDate = new Date('2022-01-24');
    const endDate = new Date('2026-04-27');
    const difference = endDate.getTime() - startDate.getTime();
    const yearsOfExperience = difference / (1000 * 3600 * 24 * 365.25);
    this.roundedYearsOfExperience = Math.floor(yearsOfExperience);
    this.remainingMonths = Math.floor((yearsOfExperience - this.roundedYearsOfExperience) * 12);
  }


}
