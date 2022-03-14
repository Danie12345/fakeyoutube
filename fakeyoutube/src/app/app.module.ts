import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasecomponentComponent } from './basecomponent/basecomponent.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './basecomponent/navbar/navbar.component';
import { MainvideoComponent } from './basecomponent/mainvideo/mainvideo.component';
import { OthervideosComponent } from './basecomponent/othervideos/othervideos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BasecomponentComponent,
    NavbarComponent,
    MainvideoComponent,
    OthervideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
