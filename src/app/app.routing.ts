// External
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Internal
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
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
    path: 'theme',
    component: ThemeComponent
  }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);