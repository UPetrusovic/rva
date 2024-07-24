import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './utility/home/home.component';
import { BankaComponent } from './main/banka/banka.component';
import { FilijalaComponent } from './main/filijala/filijala.component';
import { KorisnikUslugeComponent } from './main/korisnik-usluge/korisnik-usluge.component';
import { AboutComponent } from './utility/about/about.component';
import { AuthorComponent } from './utility/author/author.component';

const routes: Routes = [
  
  { path: 'home', component: HomeComponent },
  { path: 'banka', component: BankaComponent},
  { path: 'filijala', component: FilijalaComponent},
  { path: 'korisnik-usluge', component: KorisnikUslugeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'author', component: AuthorComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }