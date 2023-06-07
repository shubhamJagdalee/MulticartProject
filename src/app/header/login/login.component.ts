import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public allData:any=[];
  public em:any
  public pass:any
  
  constructor(private route:Router){
  
  }
    Login(data:any){
     this.allData.push(data.value)
    console.log(data.value);
    }
  
    register(){
      this.route.navigateByUrl('register');
    }
    
  
}
