import { Component } from '@angular/core';
import { RegServiceService } from './reg-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  public userData:any=[]

  public idd:any;
  public fn:any
  public ln:any
  public em:any
  public ps:any

  constructor(private api:RegServiceService){

  }

OnSubmitData(data:any){
  this.api.addData(data.value).subscribe(
    ((res:any)=>{
      console.log(res);
      this.getAllData();
    }),
    ((err:any)=>{
      console.log(err);
    })
  );

  }

  getAllData(){
    this.api.getData().subscribe(
      ((res:any)=>{
       // console.log(res);
       this.userData=res;

      }),
      ((err:any)=>{
        console.log(err);
      })
    )
  }
  
}



 