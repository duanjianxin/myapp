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
import { NewshomeComponent } from './news/newshome/newshome.component';
import { Gszx120Component } from './news/gszx/gszx120/gszx120.component';
import { Gszx112Component } from './news/gszx/gszx112/gszx112.component';
import { Gszx110Component } from './news/gszx/gszx110/gszx110.component';
import { Gszx100Component } from './news/gszx/gszx100/gszx100.component';
import { Gszx35Component } from './news/gszx/gszx35/gszx35.component';
import { Hangye127Component } from './news/hangye/hangye127/hangye127.component';
import { Hangye125Component } from './news/hangye/hangye125/hangye125.component';
import { Hangye124Component } from './news/hangye/hangye124/hangye124.component';
import { Hangye123Component } from './news/hangye/hangye123/hangye123.component';
import { Hangye122Component } from './news/hangye/hangye122/hangye122.component';


// 人才招聘
import { JobComponent } from './job/job.component';
import { JobhomeComponent } from './job/jobhome/jobhome.component';
import { Job119Component } from './job/job119/job119.component';
import { Job118Component } from './job/job118/job118.component';
import { Job117Component } from './job/job117/job117.component';
import { Job116Component } from './job/job116/job116.component';
import { Job115Component } from './job/job115/job115.component';
import { Job114Component } from './job/job114/job114.component';
import { Job113Component } from './job/job113/job113.component';

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
        component: NewsComponent,
        children: [
            {
                path: '',
                component: NewshomeComponent
            }, {
                path: 'gszx120',
                component: Gszx120Component
            }, {
                path: 'gszx112',
                component: Gszx112Component
            }, {
                path: 'gszx110',
                component: Gszx110Component
            }, {
                path: 'gszx100',
                component: Gszx100Component
            }, {
                path: 'gszx35',
                component: Gszx35Component
            }, {
                path: 'hangye127',
                component: Hangye127Component
            }, {
                path: 'hangye125',
                component: Hangye125Component
            }, {
                path: 'hangye124',
                component: Hangye124Component
            }, {
                path: 'hangye123',
                component: Hangye123Component
            }, {
                path: 'hangye122',
                component: Hangye122Component
            }
        ]
    },
    {
        path: 'job',
        component: JobComponent,
        children: [
            {
                path: '',
                component: JobhomeComponent
            },
            {
                path: 'job119',
                component: Job119Component
            },
            {
                path: 'job118',
                component: Job118Component
            },
            {
                path: 'job117',
                component: Job117Component
            },
            {
                path: 'job116',
                component: Job116Component
            },
            {
                path: 'job115',
                component: Job115Component
            },
            {
                path: 'job114',
                component: Job114Component
            },
            {
                path: 'job113',
                component: Job113Component
            }
        ]
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
