import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  faCoffee = faCoffee;
  skills = ['angular', 'react', 'Ts', 'js', 'css', 'html'];
  skillsImage = [
    {
      image:
        'https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif',
    },
    {
      image:
        'https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg',
    },

    {
      image: 'https://www.svgrepo.com/show/374144/typescript.svg',
    },

    {
      image: 'https://www.svgrepo.com/show/373703/js.svg',
    },

    {
      image:
        'https://www.svgrepo.com/show/382498/css-document-extension-file-file-format-file-type.svg',
    },
    {
      image: 'https://www.svgrepo.com/show/349402/html5.svg',
    },
  ];
}
