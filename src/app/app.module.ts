import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app.routes';
import {ServiceService} from '../components/service.service';
import { BaseChartDirective } from 'ng2-charts';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    HomeComponent,
    AboutComponent,
    HttpClientModule,
    BaseChartDirective
  ],
  providers: [ServiceService],
  bootstrap: []
})
export class AppModule { }
