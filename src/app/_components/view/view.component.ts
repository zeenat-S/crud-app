import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from 'src/app/_models/employee';
import { EmployeeService } from 'src/app/_services/employee.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  searchText = ""
  closeResult = ''
  openEdit = false;

  employees!: Employee[]

  form = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    phone: new FormControl(),
    department: new FormControl("")
  })

  constructor(private employeeService: EmployeeService, private firestore: AngularFirestore, private modalService: NgbModal, private router: Router) {
    this.firestore.collection<Employee>('employees').valueChanges().subscribe(
      (data) => {
        this.employees = data;
      }
    )
  }

  delete(id: string) {
    this.employeeService.delete(id);
  }

  edit(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  update(id: string) {
    this.employeeService.update({
      id: String(this.form.value.department) + String(Math.floor(Math.random() * 1000 + 1)),
      name: String(this.form.value.name), email: String(this.form.value.email), phone: Number(this.form.value.phone), department: String(this.form.value.department)
    }, id)
  }

  add() {
    this.router.navigate(["/add"])
  }

}
