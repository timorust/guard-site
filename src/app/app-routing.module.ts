import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";
import {CheckUserGuard} from "./guards/check-user.guard";

const routes: Routes = [
  {
    path: 'profile',
    component: ProfilePageComponent,
    canActivate: [CheckUserGuard],
    data: {
      name: 'timor'
    }
  },
  {
    path: '404',
    component: ProfilePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
