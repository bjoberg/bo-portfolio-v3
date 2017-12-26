// External
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from "@angular/flex-layout";

// Service Worker
import { ServiceWorkerModule } from '@angular/service-worker';

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
import { ErrorComponent } from './components/error/error.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// Services
import { ImageService } from './services/image.service';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatGridListModule, MatMenuModule, MatProgressBarModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    AboutComponent,
    PhotographyComponent,
    PhotographyPortfolioComponent,
    PhotographyPortfolioItemComponent,
    SoftwareComponent,
    ErrorComponent,
    PageNotFoundComponent
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
    MatProgressSpinnerModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    Title,
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
