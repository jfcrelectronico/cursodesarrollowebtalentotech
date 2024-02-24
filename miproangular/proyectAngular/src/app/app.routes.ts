import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ServicesComponent } from './pages/services/services.component';
import { VerclientesComponent } from './pages/clientes/verclientes/verclientes.component';
import { AgregarclientesComponent } from './pages/clientes/agregarclientes/agregarclientes.component';
//here put all routes that leave to surface through your all pages
export const routes: Routes = [
// the baisc structure for surface between pages is path, title and component
    {
        path: '',
        title: 'Inicio',
        component: InicioComponent,
    },


    {
        path: 'aboutUs',
        title: 'aboutUs',
        component: AboutusComponent,
    },


    {
        path: 'portafolio',
        title: 'Portafolio',
        component: PortafolioComponent,
    },

    {
        path: 'services',
        title: 'Servicios',
        component: ServicesComponent,
    },

    {
        path: 'clientes',
        title: 'clientes potenciales',
        component: VerclientesComponent,
    },

    {
        path: 'addclientes',
        title: 'agregar clientes',
        component: AgregarclientesComponent,
    }
];
