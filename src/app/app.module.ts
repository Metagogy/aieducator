import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { McqsectionComponent } from './components/mcqsection/mcqsection.component';
import { LoggedInHomeComponent } from './components/logged-in-home/logged-in-home.component';
import { SinglecourseComponent } from './components/singlecourse/singlecourse.component';
import { HomecomponentComponent } from './components/homecomponent/homecomponent.component';
import { CoursecomponentComponent } from './components/coursecomponent/coursecomponent.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CoursedetailsComponent } from './components/coursedetails/coursedetails.component';
import { CoursecatalogComponent } from './components/coursecatalog/coursecatalog.component';
import { CoursedetailslaptopComponent } from './components/coursedetailslaptop/coursedetailslaptop.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { GaugeChartModule } from 'angular-gauge-chart'
import { ChartsModule } from 'ng2-charts';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
import { AuthenticationServiceService } from './authentication-service.service'
import { DataServiceService } from './data-service.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';
import { TestandtopicComponent } from './components/testandtopic/testandtopic.component';
import {AuthInterceptor} from 'src/app/helpers/errorintreceptor';
import {AuthseviceService} from 'src/app/services/authsevice.service';
import { AssignmentsComponent } from './components/assignments/assignments.component';
import { McqComponent } from './components/mcq/mcq.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    McqsectionComponent,
    LoggedInHomeComponent,
    SinglecourseComponent,
    CoursedetailsComponent,
    CoursedetailslaptopComponent,
    CoursecatalogComponent,
    HomecomponentComponent,
    CoursecomponentComponent,
    AboutusComponent,
    ContactusComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DashboardComponent,
    TestandtopicComponent,
    AssignmentsComponent,
    McqComponent,
    CartComponent
  ],
  imports: [
    NgxSpinnerModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HighchartsChartModule,
    GaugeChartModule,
    ChartsModule,
    ChartModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthenticationServiceService,
    DataServiceService,
    AuthseviceService,
    { provide: HIGHCHARTS_MODULES, useFactory: () => [ more, exporting ] }, // add as factory to your providers
    {
      provide:HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
