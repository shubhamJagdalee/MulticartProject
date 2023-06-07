import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './header/login/login.component';
import { RegistrationComponent } from './header/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { WatchComponent } from './subscribe/watch/watch.component';
import { GymComponent } from './subscribe/gym/gym.component';
import { ShoesComponent } from './subscribe/shoes/shoes.component';
import { FrenchComponent } from './subscribe/french/french.component';
import {   HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidenavComponent,
    LoginComponent,
    RegistrationComponent,
    WatchComponent,
    GymComponent,
    ShoesComponent,
    FrenchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbDropdownModule,
    NgbCollapseModule,
    FormsModule,
    HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
