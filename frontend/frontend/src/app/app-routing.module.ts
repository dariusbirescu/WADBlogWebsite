import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent }      from './register.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {
  
}