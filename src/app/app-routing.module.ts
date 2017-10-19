import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { DlcpComponent } from './dlcp/dlcp.component';


// 解决方案
import { FanganComponent } from './fangan/fangan.component';
import { FanganHomeComponent } from './fangan/fangan-home/fangan-home.component';
import { FanganXiaofeiComponent } from './fangan/fangan-xiaofei/fangan-xiaofei.component';
import { FanganLEDComponent } from './fangan/fangan-led/fangan-led.component';
import { FanganIotComponent } from './fangan/fangan-iot/fangan-iot.component';
import { FanganDianyuanComponent } from './fangan/fangan-dianyuan/fangan-dianyuan.component';





// 新闻
import { NewsComponent } from './news/news.component';

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
        path: 'fangan',
        component: FanganComponent,
        children: [
            {
                path: '',
                component: FanganHomeComponent
            },
            {
                path: 'xiaofei',
                component: FanganXiaofeiComponent
            },
            {
                path: 'LED',
                component: FanganLEDComponent

            }, {
                path: 'iot',
                component: FanganIotComponent
            }, {
                path: 'dianyuan',
                component: FanganDianyuanComponent
            }
        ]
    },
    {
        path: 'news',
        component: NewsComponent
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
