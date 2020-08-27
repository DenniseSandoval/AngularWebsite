import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
    { path: 'contact', component: ContactComponent },
    { path: 'aboutus', component: AboutUsComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'home', component: HomeComponent }
];