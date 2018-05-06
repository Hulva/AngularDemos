import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { environment } from '../environments/environment';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    const demoRoutes = [];
    environment.demoList.forEach(demo => demoRoutes.push({ path: demo.link, loadChildren: demo.module }));
    this.router.config.unshift(...demoRoutes);
  }
}
