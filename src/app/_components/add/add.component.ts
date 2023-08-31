import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/_models/employee';
import { EmployeeService } from 'src/app/_services/employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  employees!: Employee[]

  constructor(private employeeService: EmployeeService, private firestore: AngularFirestore) {
    this.firestore.collection<Employee>('employees').valueChanges().subscribe(
      (data) => {
        this.employees = data;
      }
    )
  }

  form = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    phone: new FormControl(),
    department: new FormControl("")
  })

  save() {
    const employee: Employee = {
      name: String(this.form.value.name),
      email: String(this.form.value.email),
      phone: Number(this.form.value.phone),
      department: String(this.form.value.department),
      id: String(this.form.value.department) + String(Math.floor(Math.random() * 1000 + 1))
    }

    const id = []

    for (let emp of this.employees) {
      id.push(emp.id)
    }

    if(!id.includes(employee.id)) {
      this.employeeService.create(employee, employee.id);
    } 

    this.form.reset();
  }

}
