import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

/*Components*/
import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/header/header.component';
import { Section1Component } from './componets/section1/section1.component';
import { Section2Component } from './componets/section2/section2.component';
import { Section3Component } from './componets/section3/section3.component';
import { FooterComponent } from './componets/footer/footer.component';
import { Section4Component } from './componets/section4/section4.component';
import { Section5Component } from './componets/section5/section5.component';
import { Section6Component } from './componets/section6/section6.component';

/*Services*/
import {ApiGeneratorService } from './services/api-generator.service';
import {ChuckjokeService } from './services/chuckjoke.service';
import {CitiesService } from './services/cities.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    FooterComponent,
    Section4Component,
    Section5Component,
    Section6Component
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ApiGeneratorService,ChuckjokeService,CitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
