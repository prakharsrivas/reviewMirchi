import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DemoMaterialModule } from './material-module';
import { HttpClientModule } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SearchComponent } from './components/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuickFilterComponent } from './components/quick-filter/quick-filter.component';
import { MovieShowcaseComponent } from './components/movie-showcase/movie-showcase.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    QuickFilterComponent,
    MovieShowcaseComponent,
    MovieDetailsComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    NgCircleProgressModule.forRoot({
      "backgroundColor": "#098CCF",
      "radius": 60,
      "maxPercent": 10000,
      "unitsFontWeight": "100",
      "unitsColor": "#483500",
      "outerStrokeWidth": 5,
      "outerStrokeColor": "#FFFFFF",
      "innerStrokeColor": "#FFFFFF",
      "titleColor": "#ffffff",
      "titleFontSize": "60",
      "titleFontWeight": "400",
      "subtitleColor": "#483500",
      "subtitleFontWeight": "500",
      "showSubtitle": false,
      "showUnits": false,
      "showInnerStroke": false,
      "startFromZero": false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
