import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { QuickFilterComponent } from './components/quick-filter/quick-filter.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: 'moviedetails/:id', component: MovieDetailsComponent},
  { path: '', component: HomeComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const appRoutingModule = RouterModule.forRoot(routes);
