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

// Photography
import { PhotographyComponent } from './components/photography/photography.component';
import { PortfolioGroupComponent } from './components/photography/portfolio-group/portfolioGroup.component';

// Software
import { SoftwareComponent } from './components/software/software.component';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdGridListModule, MdMenu } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    AboutComponent,
    PhotographyComponent,
    PortfolioGroupComponent,
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
