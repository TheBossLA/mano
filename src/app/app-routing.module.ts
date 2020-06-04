import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

  

const routes: Routes = [

  {path: '', component: HeroesComponent },
  {path: 'heros', component: HeroesComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {
    path: 'hero-details', component: HeroDetailComponent
  },
  
  // {
  //   path: 'plumbers', loadChildren: () => import('./plumbing/plumbing.module').then(m => m.PlumbingModule)
  // },
  // {
  //   path: 'electrical', loadChildren: () => import('./electrical/electrical.module').then(m => m.ElectricalModule)
  // },
  {
    path: '', redirectTo: '', pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
