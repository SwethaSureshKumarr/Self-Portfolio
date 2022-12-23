import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoadingComponent } from './loading/loading.component';
import { MainComponent } from './main/main.component';
import { ProjectComponent } from './project/project.component';


const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'loading/:page', component:LoadingComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'projects',component:ProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
