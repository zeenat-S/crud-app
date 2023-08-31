import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Employee } from '../_models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // departments = [{name: "Information Technology", }]

  constructor(private firestore: AngularFirestore) { }

  create(employee: Employee, id: string) {
    this.firestore.collection('employees').doc(id).set(employee).then(() => {
      console.log("creation success");
    }).catch(error => {
      console.log("something went wrong: " + error)
    })
  }

  update(employee: any, id: string) {
    this.firestore.collection('employees').doc(id).update(employee)
  }

  delete(id: string) {
    this.firestore.collection('employees').doc(id).delete();
  }

  createId(department: string) {
    const ID = String(Math.floor(Math.random() * 1000 + 1))
    return ID;
  }

}
