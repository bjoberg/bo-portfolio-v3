// External
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from "@angular/flex-layout";

// Routing
import { Routing } from './app.routing';

// Components
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { PhotographyPortfolioComponent } from './components/photography/photography-portfolio/photography-portfolio.component';
import { PhotographyPortfolioItemComponent } from './components/photography/photography-portfolio-item/photography-portfolio-item.component';
import { SoftwareComponent } from './components/software/software.component';

// Services
import { ImageService } from './services/image.service';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatGridListModule, MatMenuModule, MatProgressBarModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    AboutComponent,
    PhotographyComponent,
    PhotographyPortfolioComponent,
    PhotographyPortfolioItemComponent,
    SoftwareComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatGridListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [
    Title,
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
