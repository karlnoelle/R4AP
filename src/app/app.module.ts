import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { RootComponent } from './root/root.component';
import { AdminComponent } from './admin/admin.component';
import { CreateEventComponent } from './create-event/create-event.component';

const appRoutes: Routes = [
  { path: '', component: RootComponent },
  { path: 'about', component: AboutComponent },
  { path: 'events', component: EventsComponent },
  { path: 'create-event', component: CreateEventComponent },
  { path: 'admin', component: AdminComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    EventsComponent,
    RootComponent,
    AdminComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
