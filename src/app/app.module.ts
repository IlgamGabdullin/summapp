import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StartComponent } from './start/start.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { CalculateComponent } from './calculate/calculate.component';
import { ResultComponent } from './result/result.component';

import { UserService } from './user.service';
import { DataService } from './data.service';

import { AuthGuard } from './auth.guard';



const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: IndexComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    component: ProfileComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    ProfileComponent,
    PageNotFoundComponent,
    StartComponent,
    ConfirmComponent,
    CalculateComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    DataService,
    AuthGuard
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
