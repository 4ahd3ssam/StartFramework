import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: () => {
            return "home"
        },
        pathMatch: "full"
    },
    {
        path: "home",
        component: HomeComponent,
        title: "Home"
    },
    {
        path: "about",
        component: AboutComponent,
        title: "About"
    },
    {
        path: "portfolio",
        component: PortfolioComponent,
        title: "Portfolio"
    },
    {
        path: "contact",
        component: ContactComponent,
        title: "Contact"
    },
    {
        path: "**",
        component: NotfoundComponent,
        title: "Error"
    }
];
