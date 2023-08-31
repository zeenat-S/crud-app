import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './_components/home/home.component';
import { FilterPipe } from './_pipes/filter.pipe';
import { ViewComponent } from './_components/view/view.component';
import { AddComponent } from './_components/add/add.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PhoneValidatorDirective } from './_directives/phone-validator.directive';
import { EmailValidatorDirective } from './_directives/email-validator.directive';
import { TilesViewComponent } from './_components/tiles-view/tiles-view.component';
import { StatusCommentsPipe } from './_pipes/status-comments.pipe'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterPipe,
    ViewComponent,
    AddComponent,
    PhoneValidatorDirective,
    EmailValidatorDirective,
    TilesViewComponent,
    StatusCommentsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
