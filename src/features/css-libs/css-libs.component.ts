import { Component } from '@angular/core';

@Component({
  selector: 'css-libs',
  templateUrl: './css-libs.component.html',
  styleUrls: ['./css-libs.component.css']
})
export class CssLibsComponent {
  libraries = [
    {

      name: 'bootstrap',
      image: 'https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg',
      version: '5-v'
    },
    {
      name: 'Material',
      image: 'https://angular.io/generated/images/marketing/concept-icons/material.png',
    },
    {
      name: 'PrimeNG',
      image: 'https://i0.wp.com/www.primefaces.org/wp-content/uploads/2021/10/primeng-logo.png?fit=280%2C300&ssl=1',
    },
    {
      name: 'PrimeFlex',
      image: 'https://asset.brandfetch.io/idybNQjL7c/idL-gC6fYL.jpeg?updated=1692515644780',
    },
    {
      name: 'Ant Design',
      image: 'https://www.svgrepo.com/show/353401/ant-design.svg',
    },
    {
      name: 'Nebular',
      image: 'https://asset.brandfetch.io/idfPR4nMPq/idh1IoScdg.jpeg?updated=1694515016736',
    },
    {
      name: 'Milligram',
      image: 'https://cdn.worldvectorlogo.com/logos/milligram.svg',
    },
    {
      name: 'Ag-Grid',
      image: 'https://blog.ag-grid.com/content/images/2021/11/200pxArtboard-5.png',
    }
  ]
}
