import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {


  fullName : string;
  email : string;
  constructor() { }

  ngOnInit(): void {
  }

  saveEmployee(empForm : NgForm) : void{
    console.log(empForm.value);
    this.fullName = "pokharel";
    this.email = "cmos.pokh@gmail.com";
  }

}
