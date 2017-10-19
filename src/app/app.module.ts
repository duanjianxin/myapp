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
