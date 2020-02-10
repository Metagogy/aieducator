import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactusComponent} from './components/contactus/contactus.component';
import {HomecomponentComponent} from './components/homecomponent/homecomponent.component';

import { CoursecomponentComponent } from './components/coursecomponent/coursecomponent.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { EventsComponent } from './components/events/events.component';
import { TecharticlesComponent } from './components/techarticles/techarticles.component';
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

const routes: Routes = [
  {path: 'contactus', component: ContactusComponent},
  {path: '', component: HomecomponentComponent},
  {path: 'login_home', component: LoggedInHomeComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'course', component: CoursecomponentComponent},
  {path: 'event', component: EventsComponent},
  {path: 'techArticles', component: TecharticlesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'scourse', component: SinglecourseComponent},
  {path: 'mcq', component: McqsectionComponent},
  {path: 'coursedetails/:id', component: CoursedetailslaptopComponent},
  {path: 'coursecatalog', component: CoursecatalogComponent},
  {path: 'dashboard', component: DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [ContactusComponent, HomecomponentComponent, AboutusComponent, CoursecomponentComponent, EventsComponent, TecharticlesComponent, LoginComponent, RegisterComponent, SinglecourseComponent, McqsectionComponent]
