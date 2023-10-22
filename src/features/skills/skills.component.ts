import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  faCoffee = faCoffee;
  skills = ['html', 'css', 'js', 'angular', 'react'];
  skillsImage = [
    {
      image: "https://www.svgrepo.com/show/349402/html5.svg"
    },
    {
      image: "https://www.svgrepo.com/show/349330/css3.svg"
    },
    {
      image: "https://www.svgrepo.com/show/452045/js.svg"
    },
    {
      image: "https://www.svgrepo.com/show/373427/angular.svg"
    },
    {
      image: "https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg"
    }
  ]


}
