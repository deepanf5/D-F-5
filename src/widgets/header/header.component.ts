import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  showNavList = false;
  public getScreenWidth: any;
  activeSkill = false;
  activeProject = false
  home = true;

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.onWindowResize();
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

  skill() {
    this.activeSkill = true;
    this.activeSkill === true ? (this.home = false, this.activeProject = false) : false;
  }
  project() {
    this.activeProject = true;
    this.activeSkill = true ? (this.home = false, this.activeSkill = false) : false;
  }
  
}
