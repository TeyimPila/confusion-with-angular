import { Routes } from '@angular/router';

// Components whose routes need to be created
import { MenuComponent } from '../menu/menu.component';
import { DishdetailsComponent } from '../dishdetails/dishdetails.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';


export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'dishDetail/:id', component: DishdetailsComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contactus', component: ContactComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
];
