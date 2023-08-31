import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Employee } from 'src/app/_models/employee';

@Component({
  selector: 'app-tiles-view',
  templateUrl: './tiles-view.component.html',
  styleUrls: ['./tiles-view.component.css']
})
export class TilesViewComponent {

  employees !: Employee[]

  constructor(private firestore: AngularFirestore) {
    this.firestore.collection<Employee>('employees').valueChanges().subscribe(data => {
      this.employees = data;
    })
  }

}
