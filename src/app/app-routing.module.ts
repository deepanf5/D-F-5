import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from 'src/features/skills/skills.component';
import { HeaderComponent } from 'src/widgets/header/header.component';

const routes: Routes = [
  {
    path: '', component: HeaderComponent
  },
  {
    path: 'skill', component: SkillsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
