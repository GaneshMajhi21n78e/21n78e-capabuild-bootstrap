import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HeroSectionComponent } from './Components/hero-section/hero-section.component';
import { FeaturedServiceComponent } from './Components/featured-service/featured-service.component';
import { AboutSectionComponent } from './Components/about-section/about-section.component';
import { ClientsSectionComponent } from './Components/clients-section/clients-section.component';
import { CallToActionComponent } from './Components/call-to-action/call-to-action.component';
import { OnFocusActionComponent } from './Components/on-focus-action/on-focus-action.component';
import { FeaturesSectionComponent } from './Components/features-section/features-section.component';
import { ServicesSectionComponent } from './Components/services-section/services-section.component';
import { TestimonialSectionComponent } from './Components/testimonial-section/testimonial-section.component';
import { PricingSectionComponent } from './Components/pricing-section/pricing-section.component';
import { FaqSectionComponent } from './Components/faq-section/faq-section.component';
import { PortfolioSectionComponent } from './Components/portfolio-section/portfolio-section.component';
import { TeamSectionComponent } from './Components/team-section/team-section.component';
import { BlogsSectionComponent } from './Components/blogs-section/blogs-section.component';
import { ContactSectionComponent } from './Components/contact-section/contact-section.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { AdvantageCapabuildComponent } from './Pages/advantage-capabuild/advantage-capabuild.component';
import { CoursesComponent } from './Pages/courses/courses.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { LatestNewsComponent } from './Pages/latest-news/latest-news.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { LoginComponent } from './Pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroSectionComponent,
    FeaturedServiceComponent,
    AboutSectionComponent,
    ClientsSectionComponent,
    CallToActionComponent,
    OnFocusActionComponent,
    FeaturesSectionComponent,
    ServicesSectionComponent,
    TestimonialSectionComponent,
    PricingSectionComponent,
    FaqSectionComponent,
    PortfolioSectionComponent,
    TeamSectionComponent,
    BlogsSectionComponent,
    ContactSectionComponent,
    FooterComponent,
    HomeComponent,
    AdvantageCapabuildComponent,
    CoursesComponent,
    AboutUsComponent,
    LatestNewsComponent,
    ContactUsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
