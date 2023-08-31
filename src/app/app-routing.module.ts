import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_components/home/home.component';
import { ViewComponent } from './_components/view/view.component';
import { AddComponent } from './_components/add/add.component';
import { TilesViewComponent } from './_components/tiles-view/tiles-view.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "view", component: ViewComponent},
  { path: "add", component: AddComponent},
  { path: "tiles", component: TilesViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
