// External
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// About
import { AboutComponent } from './components/about/about.component';

// Photography
import { PhotographyComponent } from './components/photography/photography.component';
import { PhotographyPortfolioComponent } from './components/photography/photography-portfolio/photography-portfolio.component';
import { PhotographyPortfolioItemComponent } from './components/photography/photography-portfolio-item/photography-portfolio-item.component';

// Software
import { SoftwareComponent } from './components/software/software.component';

// Error
import { ErrorComponent } from './components/error/error.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'photography',
    children: [
      {
        path: '',
        component: PhotographyComponent
      },
      {
        path: ':imageGroup',
        component: PhotographyPortfolioComponent
      },
      {
        path: ':imageGroup/:image',
        component: PhotographyPortfolioItemComponent
      },
    ]
  },
  {
    path: 'software',
    component: SoftwareComponent
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
