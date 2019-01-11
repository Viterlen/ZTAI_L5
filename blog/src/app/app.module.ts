import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes} from "@angular/router";
import { BlogComponent } from './components/blog/blog.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogItemTextComponent } from './components/blog-item-text/blog-item-text.component';
import { BlogItemImageComponent } from './components/blog-item-image/blog-item-image.component';
import { BlogItemDetailComponent } from './components/blog-item-detail/blog-item-detail.component';
import {PostServiceService} from "./services/post-service.service";
import {HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule,ReactiveFormsModule
} from '@angular/forms';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { TextFormatDirective } from './directives/text-format.directive';
import { BlogCreateComponent } from './components/blog-create/blog-create.component';
import {AuthService} from "./services/auth.service";
import {AuthInterceptor} from './services/auth.interceptor';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import {AdminGuard} from "./services/admin-guard.guard";



const appRoutes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'quiz',
    canActivate: [AdminGuard],
    component: QuizComponent,
  },
  {
    path: 'blog',
    component: BlogHomeComponent,
  },
  {
    path: 'create-post',
    component: BlogCreateComponent,
  },
  {
    path: 'blog/details/:id',
    component: BlogItemDetailComponent,
  }]


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    QuizComponent,
    HomeComponent,
    BlogComponent,
    NavbarComponent,
    SummaryPipe,
    BlogItemComponent,
    BlogItemTextComponent,
    BlogItemImageComponent,
    BlogItemDetailComponent,
    FilterPipe,
    SearchBarComponent,
    BlogHomeComponent,
    TextFormatDirective,
    BlogCreateComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
    }
    ,PostServiceService,AuthService],
  bootstrap: [AppComponent]
})


export class AppModule { }
