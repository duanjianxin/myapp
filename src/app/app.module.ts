import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

//   ng-zorro
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
// main
import { CarouselComponent } from './home/carousel/carousel.component';
import { MainComponent } from './home/main/main.component';
import { AboutComponent } from './home/about/about.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    CarouselComponent,
    MainComponent,
    DlcpComponent,
    FanganComponent,
    NewsComponent,
    FanganHomeComponent,
    FanganXiaofeiComponent,
    FanganLEDComponent,
    FanganIotComponent,
    FanganDianyuanComponent,
    Gszx120Component,
    NewshomeComponent,
    Gszx112Component,
    Gszx110Component,
    Gszx100Component,
    Gszx35Component,
    Hangye127Component,
    Hangye125Component,
    Hangye124Component,
    Hangye123Component,
    Hangye122Component,
    JobComponent,
    JobhomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
