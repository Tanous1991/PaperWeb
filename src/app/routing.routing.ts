import { DetailComponent } from './Detail/Detail.component';
import { HomeComponent } from './Home/Home.component';
import { Routes, RouterModule } from '@angular/router';

export const routes:Routes = [
	{path: '', redirectTo: 'home', pathMatch: 'full'}, 
	{path: 'home', component: HomeComponent},
	{path: 'detail/:id', component: DetailComponent}
];
