// Angular stuff
import { Location } from '@angular/common';
import { async, fakeAsync, ComponentFixture, TestBed, tick } from '@angular/core/testing';
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
    fixture.detectChanges();
  });

  it(': navigate to "" redirects your to /about', fakeAsync(() => {
    router.navigate(['']).then(() => {
      expect(location.path()).toBe('/about');
    });
  }));

  it(': navigate to "about" redirects your to /about', fakeAsync(() => {
    router.navigate(['about']).then(() => {
      expect(location.path()).toBe('/about');
    });
  }));

  it(': navigate to "photography" redirects your to /photography', fakeAsync(() => {
    router.navigate(['photography']).then(() => {
      expect(location.path()).toBe('/photography');
    });
  }));

  it(': navigate to "photography/:imageGroup" redirects your to /photography/imageGroup', fakeAsync(() => {
    // router.navigate(['photography']).then(() => {
    //   expect(location.path()).toBe('/photography');
    // });
    expect(false).toEqual(true);
  }));

  it(': navigate to "photography/:imageGroup/:image" redirects your to /photography/imageGroup/image', fakeAsync(() => {
    // router.navigate(['photography']).then(() => {
    //   expect(location.path()).toBe('/photography');
    // });
    expect(false).toEqual(true);
  }));

  it(': navigate to "software" redirects your to /software', fakeAsync(() => {
    router.navigate(['software']).then(() => {
      expect(location.path()).toBe('/software');
    });
  }));

  it(': navigate to "404" redirects your to /404', fakeAsync(() => {
    router.navigate(['404']).then(() => {
      expect(location.path()).toBe('/404');
    });
  }));

  it(': navigate to "**" redirects your to /404', fakeAsync(() => {
    router.navigate(['**']).then(() => {
      expect(location.path()).toBe('/404');
    });
  }));
});
