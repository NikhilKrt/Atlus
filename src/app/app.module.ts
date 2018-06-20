import { Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';
import { OneComponent } from './countries/one/one.component';
import { AllComponent } from './countries/all/all.component';
import { AllDataService } from './all-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllComponent,
    OneComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    Ng4LoadingSpinnerModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path:'all/:region',
         component :AllComponent
      },
      
      { "path": "all/:code",
       component: AllComponent 
      },
      {
        path: 'one/:country',
         component:OneComponent
      }
    ])
  ],
  providers: [AllDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
