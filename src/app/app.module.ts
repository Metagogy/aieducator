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
import {AuthGuard} from 'src/app/guards/auth.guard';
import { TopiccomponentComponent } from './components/topiccomponent/topiccomponent.component';
import { OppguardGuard } from './guards/oppguard.guard';
import {AceEditorModule } from 'ng2-ace-editor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CartComponent} from 'src/app/components/cart/cart.component';
import { RegisteredCoursesComponent } from './components/registered-courses/registered-courses.component';
import { ContentDisplayComponent } from './components/content-display/content-display.component';
import {NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import {AngularFireModule} from 'angularfire2';
import { environment } from 'src/environments/environment';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { SingleDashboardComponent } from './components/single-dashboard/single-dashboard.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import {CountdownModule} from 'ngx-countdown';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { GaugeModule } from 'angular-gauge';
import { ChatComponent } from './components/chat/chat.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { ServerErrorComponent } from './components/server-error/server-error.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SomethingwentwrongComponent } from './components/somethingwentwrong/somethingwentwrong.component';

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
    CartComponent,
    TopiccomponentComponent,
    RegisteredCoursesComponent,
    ContentDisplayComponent,
    SingleDashboardComponent,
    ChangePasswordComponent,
    ForgetPasswordComponent,
    UpdateProfileComponent,
    ChatComponent,
    UnauthorizedComponent,
    ServerErrorComponent,
    PagenotfoundComponent,
    SomethingwentwrongComponent
  ],
  imports: [
    GaugeModule.forRoot(),
    CountdownModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AceEditorModule,
    NgxSpinnerModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HighchartsChartModule,
    GaugeChartModule,
    ChartsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    AuthGuard,
    OppguardGuard,
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
