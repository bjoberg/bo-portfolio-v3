// External
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Internal
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { SoftwareComponent } from './components/software/software.component';
import { ThemeComponent } from './components/theme/theme.component';

const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'photography',
    component: PhotographyComponent
  },
  {
    path: 'software',
    component: SoftwareComponent
  },
  {
    path: 'theme',
    component: ThemeComponent
  }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);