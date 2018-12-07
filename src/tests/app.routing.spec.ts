// Angular stuff
import { Location } from '@angular/common';
import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

// Components
import { Routing } from '../app/app.routing';
import { AppRoutes } from '../app/app.routing';
import { NavigationComponent } from '../app/components/navigation/navigation.component';
import { FooterComponent } from '../app/components/footer/footer.component';
import { AboutComponent } from '../app/components/about/about.component';
import { AppComponent } from '../app/components/app/app.component';
import { ErrorComponent } from '../app/components/error/error.component';
import { PageNotFoundComponent } from '../app/components/page-not-found/page-not-found.component';
import { PhotographyComponent } from '../app/components/photography/photography.component';
import { PhotographyPortfolioItemComponent } from '../app/components/photography/photography-portfolio-item/photography-portfolio-item.component';
import { PhotographyPortfolioComponent } from '../app/components/photography/photography-portfolio/photography-portfolio.component';
import { SoftwareComponent } from '../app/components/software/software.component';
import { MatButtonModule, MatGridListModule, MatMenuModule, MatProgressBarModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ImageService } from '../app/services/image.service';
import { DocumentRef } from '../app/services/documentRef.service';

describe('Router', () => {

  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(AppRoutes),
        MatButtonModule,
        MatGridListModule,
        MatMenuModule,
        MatProgressBarModule,
        MatIconModule,
        MatProgressSpinnerModule,
        InfiniteScrollModule
      ],
      declarations: [
        AppComponent,
        NavigationComponent,
        FooterComponent,
        AboutComponent,
        ErrorComponent,
        PageNotFoundComponent,
        PhotographyComponent,
        PhotographyPortfolioItemComponent,
        PhotographyPortfolioComponent,
        SoftwareComponent
      ],
      providers: [
        ImageService,
        DocumentRef
      ]
    });
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it(`: navigate to "" redirects your to /about and displays <about-component>`, () => {
    router.navigate(['']).then(() => {
      expect(location.path()).toBe('/about');
      fixture.detectChanges();
      const el = fixture.debugElement.nativeElement;
      expect(el.querySelector('about-component')).not.toBe(null);
    });
  });

  it(': navigate to "about" redirects your to /about and displays <about-component>', () => {
    router.navigate(['about']).then(() => {
      expect(location.path()).toBe('/about');
      fixture.detectChanges();
      const el = fixture.debugElement.nativeElement;
      expect(el.querySelector('about-component')).not.toBe(null);
    });
  });

  it(': navigate to "photography" redirects your to /photography and displays <photography-component>', () => {
    router.navigate(['photography']).then(() => {
      expect(location.path()).toBe('/photography');
      fixture.detectChanges();
      const el = fixture.debugElement.nativeElement;
      expect(el.querySelector('photography-component')).not.toBe(null);
    });
  });

  it(': navigate to "photography/:imageGroup" redirects your to /photography/imageGroup and displays <photography-portfolio>', () => {
    router.navigate(['photography', 'natural-landscape']).then(() => {
      expect(location.path()).toBe('/photography/natural-landscape');
      fixture.detectChanges();
      const el = fixture.debugElement.nativeElement;
      expect(el.querySelector('photography-portfolio')).not.toBe(null);
    });
  });

  it(': navigate to "photography/:imageGroup/:image" redirects your to /photography/imageGroup/image and displays <photography-portfolio-item>', () => {
    router.navigate(['photography', 'natural-landscape', '1']).then(() => {
      expect(location.path()).toBe('/photography/natural-landscape/1');
      fixture.detectChanges();
      const el = fixture.debugElement.nativeElement;
      expect(el.querySelector('photography-portfolio-item')).not.toBe(null);
    });
  });

  it(': navigate to "software" redirects your to /software and displays <software-component>', () => {
    router.navigate(['software']).then(() => {
      expect(location.path()).toBe('/software');
      fixture.detectChanges();
      const el = fixture.debugElement.nativeElement;
      expect(el.querySelector('software-component')).not.toBe(null);
    });
  });

  it(': navigate to "404" redirects your to /404 and displays <page-not-found-component>', () => {
    router.navigate(['404']).then(() => {
      expect(location.path()).toBe('/404');
      fixture.detectChanges();
      const el = fixture.debugElement.nativeElement;
      expect(el.querySelector('page-not-found-component')).not.toBe(null);
    });
  });

  it(': navigate to "**" redirects your to /404 and displays <page-not-found-component>', () => {
    router.navigate(['**']).then(() => {
      expect(location.path()).toBe('/404');
      fixture.detectChanges();
      const el = fixture.debugElement.nativeElement;
      expect(el.querySelector('page-not-found-component')).not.toBe(null);
    });
  });
});
