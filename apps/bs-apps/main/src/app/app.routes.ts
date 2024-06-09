import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', loadComponent: () => import('./components/home/home.component') },
  {
    path: '**',
    loadComponent: () =>
      import('./components/page-not-found/page-not-found.component'),
  },
];
