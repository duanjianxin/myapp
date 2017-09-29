import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { DlcpComponent } from './dlcp/dlcp.component';
const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'dlcp',
        component: DlcpComponent
    },
    {
        path: '**',
        component: HomeComponent
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
