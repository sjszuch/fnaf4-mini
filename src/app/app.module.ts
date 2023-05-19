import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { LightComponent } from './components/light/light.component';
import { ViewComponent } from './components/view/view.component';
import { DevmenuComponent } from './components/devmenu/devmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LightComponent,
    ViewComponent,
    DevmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
