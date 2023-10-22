import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../widgets/header/header.component';
import { HeroComponent } from '../dashboard/hero/hero.component';
import { SkillsComponent } from '../features/skills/skills.component';
import { ProjectsComponent } from 'src/features/projects/projects.component';
import { CssLibsComponent } from '../features/css-libs/css-libs.component';
import { FooterComponent } from '../widgets/footer/footer.component';
import { ExperienceComponent } from 'src/features/experience/experience.component';


// font-awsome 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// primeNG components
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { ImageModule } from 'primeng/image';
import { TabViewModule } from 'primeng/tabview';
import { BlockUIModule } from 'primeng/blockui';
import { DividerModule } from 'primeng/divider';
import { MenubarModule } from 'primeng/menubar';
import { ScrollTopModule } from 'primeng/scrolltop';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    SkillsComponent,
    ProjectsComponent,
    CssLibsComponent,
    FooterComponent,
    ExperienceComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    // primeNG components
    ButtonModule,
    AvatarModule,
    AvatarGroupModule,
    BadgeModule,
    ImageModule,
    TabViewModule,
    BlockUIModule,
    DividerModule,
    MenubarModule,
    ScrollTopModule,


    // font-awsome
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
