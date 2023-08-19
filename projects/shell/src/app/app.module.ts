import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { AppsidebarComponent } from './appsidebar/appsidebar.component';
import { AppfooterComponent } from './appfooter/appfooter.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    AppheaderComponent,
    AppsidebarComponent,
    AppfooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
