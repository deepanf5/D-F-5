import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  faCoffee = faCoffee;
  skills = ['html', 'css', 'js', 'Ts', 'angular', 'react + ts'];
  skillsImage = [
    {
      image: 'https://www.svgrepo.com/show/349402/html5.svg',
    },
    {
      image: 'https://www.svgrepo.com/show/349330/css3.svg',
    },
    {
      image: 'https://www.svgrepo.com/show/452045/js.svg',
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/archive/4/4c/20210506173340%21Typescript_logo_2020.svg/120px-Typescript_logo_2020.svg.png',
    },
    {
      image: 'https://www.svgrepo.com/show/373427/angular.svg',
    },
    {
      image:
        'https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg',
    },
  ];
}
