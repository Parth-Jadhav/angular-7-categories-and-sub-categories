import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CategoriesComponent } from './categories/categories.component';
import { ChooseOptionComponent } from './choose-option/choose-option.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Signup', component: SignupComponent },
  { path: 'Categories', component: CategoriesComponent },
  { path: 'Choose-Option', component: ChooseOptionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
