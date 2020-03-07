import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
 
})
export class HelloWorldComponent implements OnInit {
  employeeList : string;
  response : any[];
  errorMsg : any;
  isShow : boolean = false;
  //private employeeService : EmployeeService;
  
  constructor(private employeeServie : EmployeeServiceService ) { 
   this.employeeList =  JSON.stringify(this.employeeServie.getEmployee(22));
  }

  onclick() : string {
    this.isShow = ! this.isShow;
    this.employeeList =  JSON.stringify(this.employeeServie.getEmployee(22));

    let obs = this.employeeServie.getData();
    obs.subscribe((data: any[])  => {
      this.response = data;
      console.log(data);
    }, (error) => {
      console.log(error);
      this.errorMsg = error;
    })
    
    return "Whats upppppp";
  }

 
  ngOnInit(): void {
  }

}
