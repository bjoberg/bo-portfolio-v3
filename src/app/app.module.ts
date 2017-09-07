// External
import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from "@angular/flex-layout";

// Local
import { AppComponent } from './app.component';
import { Routing } from './app.routing';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { SoftwareComponent } from './components/software/software.component';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdGridListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    AboutComponent,
    PhotographyComponent,
    SoftwareComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MdButtonModule, 
    MdGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
