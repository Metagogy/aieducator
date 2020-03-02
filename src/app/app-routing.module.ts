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
import { AppComponent } from './app.component';
import { McqComponent } from './components/mcq/mcq.component';
import { AssignmentsComponent } from './components/assignments/assignments.component';
import { TopiccomponentComponent } from './components/topiccomponent/topiccomponent.component';
import { AuthGuard } from './guards/auth.guard';
import { OppguardGuard } from './guards/oppguard.guard';
import { CartComponent } from './components/cart/cart.component';
import {RegisteredCoursesComponent} from 'src/app/components/registered-courses/registered-courses.component';
import {ContentDisplayComponent} from 'src/app/components/content-display/content-display.component';
import { SingleDashboardComponent } from './components/single-dashboard/single-dashboard.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { ServerErrorComponent } from './components/server-error/server-error.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SomethingwentwrongComponent } from './components/somethingwentwrong/somethingwentwrong.component';

const routes: Routes = [
  {path: 'contactus', component: ContactusComponent},
  {path: '', component: HomecomponentComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'profile', component: ProfileComponent,canActivate:[AuthGuard]},
  {path: 'course', component: CoursecomponentComponent},
  {path: 'login', component: LoginComponent,canActivate:[OppguardGuard]},
  {path: 'register', component: RegisterComponent,canActivate:[OppguardGuard]},
  // {path: 'scourse', component: SinglecourseComponent},
  {path: 'mcq', component: McqsectionComponent,canActivate:[AuthGuard]},
  {path: 'coursedetails/:id', component: CoursedetailslaptopComponent},
  {path: 'coursecatalog', component: CoursecatalogComponent},
  {path:'changePassword',component:ChangePasswordComponent,canActivate:[AuthGuard]},
  // {path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard]},
  {path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard]},
  {
    path: 'testandtopic/:id',
    component: TestandtopicComponent,
    canActivate:[AuthGuard],
    children:[
      {path:'MCQ/:chapter_id/:test_id',component:McqComponent,canActivate:[AuthGuard]},
      {path:'assign/:assign_id',component:AssignmentsComponent,canActivate:[AuthGuard]},
      {path:':cat/:chap_slno/:topic_slno',component:TopiccomponentComponent,canActivate:[AuthGuard]},
    ]
  },
  {path:"cart",component:CartComponent,canActivate:[AuthGuard]},
  {path:"registeredCourses",component:RegisteredCoursesComponent,canActivate:[AuthGuard]},
  {path:"contentDisplay/:reg_course_id",component:ContentDisplayComponent,canActivate:[AuthGuard]},
  {path:"forgotPassword",component:ForgetPasswordComponent,canActivate:[OppguardGuard]},
  {path:'updateProfile',component:UpdateProfileComponent,canActivate:[AuthGuard]},
  {path:'unauthorized',component:UnauthorizedComponent},
  {path:'internalServerError',component:ServerErrorComponent,canActivate:[AuthGuard]},
  {path:'pagenotFound',component:PagenotfoundComponent,canActivate:[AuthGuard]},
  {path:'somethingwentwrong',component:SomethingwentwrongComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [ContactusComponent, HomecomponentComponent, AboutusComponent, CoursecomponentComponent, LoginComponent, RegisterComponent, SinglecourseComponent, McqsectionComponent,TestandtopicComponent]
