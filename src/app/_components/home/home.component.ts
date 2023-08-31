import { Component } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  events = [{eventName: "Start", status: "pending"}, {eventName: "Finish", status: "approved"}, {eventName: "Error", status: "rejected"}]
  status = ""
  type = ""
  noStatus = false

  onClick(eventName: string) {
    if( eventName.toLowerCase() === "start") {
      this.status = "pending"
      this.type = "warning"
    }
    if( eventName.toLowerCase() === "finish") {
      this.status = "approved"
      this.type = "success"
    }
    if( eventName.toLowerCase() === "error") {
      this.status = "rejected"
      this.type = "danger"
    }
    this.noStatus = true
  }

  close() {

  }
}
