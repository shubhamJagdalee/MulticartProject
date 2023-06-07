import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Multicart';
  public isCollapsed = true;
  public testClass1:any
  public testClass2:any
  ss:any

  Catergories = ['Womens Fashion', "Mens Fashion", "Kids Fashion" ,"Featured" ]
  whyChoose = [ "Shipping & Return" , "Secure Shopping", "Gallary","Affiliates","Contacts" ]
  showFlag:boolean=true;


  icon1= "https://angular.pixelstrap.com/multikart/assets/images/icon/logo.png"
  path1 = "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
  img1 = "https://angular.pixelstrap.com/multikart/assets/images/icon/logo.png"
  img2="https://angular.pixelstrap.com/multikart/assets/images/icon/visa.png"
  img3 = "https://angular.pixelstrap.com/multikart/assets/images/icon/mastercard.png"
  img4 ="https://angular.pixelstrap.com/multikart/assets/images/icon/paypal.png"
  img5="https://angular.pixelstrap.com/multikart/assets/images/icon/american-express.png"
  img6 ="https://angular.pixelstrap.com/multikart/assets/images/icon/discover.png"


  constructor( private route:Router){
    

  }

  onClick(){
    if(this.showFlag){
      this.route.navigateByUrl("footer")
    }
  }

  english(){
    this.route.navigateByUrl("english")
  }

  french(){
    this.route.navigateByUrl("french")
  }


  goToSession(){
    console.log(this.ss)
    if( this.ss == "gym"){
      this.route.navigateByUrl("gym")
    }else if(this.ss == "watch"){
      this.route.navigateByUrl("watch")
    }else if(this.ss== "shoes"){
      this.route.navigateByUrl("shoes")
    }
    
   
  }

  chat(){

    // prompt ("Ask your doubt to our customer Support")
    const input = prompt("Ask your doubt to our customer Support");
    alert(`The  answer of " ${input} " has been sent to your Email or you can check the console`);
    console.log({input} , "The process is very simple. First you need to select a item you want to buy then click on either add to cart or buy now option. Then you need to put your delivery address details and then choose payment method. That’s it. You may login to your Flipkart account for purchase or you can purchase as a guest. But its better to open an account in Flipkart for better tracking and other services. Thanks ")
  }


becomeDark(){
  this.testClass1= "test1"
}

becomeWhite(){
  this.testClass2= "test2"
}



  
}

