import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactusComponent} from './components/contactus/contactus.component';
import {HomecomponentComponent} from './components/homecomponent/homecomponent.component';
import { CoursecomponentComponent } from './components/coursecomponent/coursecomponent.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import {TestandtopicComponent} from './components/testandtopic/testandtopic.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {SinglecourseComponent} from './components/singlecourse/singlecourse.component';
import {McqsectionComponent} from './components/mcqsection/mcqsection.component';
// import { CoursedetailsComponent } from './components/coursedetails/coursedetails.component';
import { CoursecatalogComponent } from './components/coursecatalog/coursecatalog.component';
import { ProfileComponent } from './components/profile/profile.component';
import {CoursedetailslaptopComponent} from './components/coursedetailslaptop/coursedetailslaptop.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoggedInHomeComponent } from './components/logged-in-home/logged-in-home.component';
import { AssignmentsComponent } from './components/assignments/assignments.component';
import { CartComponent } from './components/cart/cart.component';
import { McqComponent } from './components/mcq/mcq.component';

const routes: Routes = [
  {path: 'contactus', component: ContactusComponent},
  {path: 'home', component: HomecomponentComponent},
  {path: 'login_home', component: LoggedInHomeComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'course', component: CoursecomponentComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'scourse', component: SinglecourseComponent},
  {path: 'mcqsection', component: McqsectionComponent},
  {path: 'coursedetails/:id', component: CoursedetailslaptopComponent},
  {path: 'coursecatalog', component: CoursecatalogComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'testandtopic',component: TestandtopicComponent},
  {path: 'assignments', component: AssignmentsComponent},
  {path: 'mcq', component: McqComponent},
  {path: 'cart', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [ContactusComponent, HomecomponentComponent, AboutusComponent, CoursecomponentComponent, LoginComponent, RegisterComponent, SinglecourseComponent, McqsectionComponent,TestandtopicComponent]
