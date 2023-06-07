import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OpenCloseComponent } from './components/open-close/open-close.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SimoAnimationsComponent } from './components/simo-animations/simo-animations.component';
import { FatBotComponent } from './fat-bot/fat-bot.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenCloseComponent,
    SimoAnimationsComponent,
    SidenavComponent,
    FatBotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
