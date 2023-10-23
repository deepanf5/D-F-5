import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  showNavList = false;
  public getScreenWidth: any;

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
  }

  toggle() {
    console.log('clicked');
    this.showNavList = !this.showNavList;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    if (this.getScreenWidth > 800) {
      this.showNavList = true;
    }
  }
}
