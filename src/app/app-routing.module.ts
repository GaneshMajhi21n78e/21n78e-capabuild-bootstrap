import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { AdvantageCapabuildComponent } from './Pages/advantage-capabuild/advantage-capabuild.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { HomeComponent } from './Pages/home/home.component';
import { CoursesComponent } from './Pages/courses/courses.component';
import { LatestNewsComponent } from './Pages/latest-news/latest-news.component';
import { LoginComponent } from './Pages/login/login.component';
const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'contactus', component: ContactUsComponent},
  {path:'aboutus', component: AboutUsComponent},
  {path:'advantage', component: AdvantageCapabuildComponent},
  {path:'courses', component: CoursesComponent},
  {path:'latest-news', component: LatestNewsComponent},
  {path:'login', component: LoginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
