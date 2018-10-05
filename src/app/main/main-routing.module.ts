import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: 'projects', loadChildren: './projects/projects.module#ProjectsModule'},
  {path: 'countries', loadChildren: './countries/countries.module#CountriesModule'},
  {path: 'cities', loadChildren: './cities/cities.module#CitiesModule'},
  {path: 'users', loadChildren: './users/users.module#UsersModule'},
  {path: '*', redirectTo: 'projects'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
