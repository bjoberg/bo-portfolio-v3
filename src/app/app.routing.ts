// External
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Internal
import { AboutComponent } from './components/about/about.component';

// Photography
import { PhotographyComponent } from './components/photography/photography.component';
import { PortfolioGroupComponent } from './components/photography/portfolio-group/portfolioGroup.component';
import { PortfolioItemComponent } from './components/photography/portfolio-item/portfolioItem.component';

// Software
import { SoftwareComponent } from './components/software/software.component';


const AppRoutes: Routes = [
  { 
    path: '',
    redirectTo: "/about",
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'photography',
    component: PhotographyComponent
  },
  {
    path: 'photography/:portfolioGroup',
    component: PortfolioGroupComponent
  },
  {
    path: 'photography/:portfolioGroup/:portfolioItem',
    component: PortfolioItemComponent
  },
  {
    path: 'software',
    component: SoftwareComponent
  }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);