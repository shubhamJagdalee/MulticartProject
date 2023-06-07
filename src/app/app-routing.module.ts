import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VegetablesComponent } from './home/vegetables/vegetables.component';
import { ClothingComponent } from './home/clothing/clothing.component';
import { LoginComponent } from './header/login/login.component';
import { RegistrationComponent } from './header/registration/registration.component';
import { WatchComponent } from './subscribe/watch/watch.component';
import { GymComponent } from './subscribe/gym/gym.component';
import { ShoesComponent } from './subscribe/shoes/shoes.component';
import { AppComponent } from './app.component';
import { FrenchComponent } from './subscribe/french/french.component';

const routes: Routes = [


{path:"" , component:HeaderComponent},
{path:"login" , component:LoginComponent},
{path:"footer" , component:VegetablesComponent},
{path:"veg", component:ClothingComponent},
{path:"register", component:RegistrationComponent},
{path:"gym" , component:GymComponent},
{path:"watch" , component:WatchComponent},
{path:"shoes" , component:ShoesComponent},
{path:"english" , component:HeaderComponent},
{path:"french" , component:FrenchComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}