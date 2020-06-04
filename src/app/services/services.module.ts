import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    
  HeroesComponent,
    
  HeroDetailComponent],
  imports: [
    CommonModule
  ]
})
export class ServicesModule { }
