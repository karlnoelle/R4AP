import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './event/event.component';
import { AdminComponent } from './admin/admin.component';
import { CreateEventComponent } from './create-event/create-event.component';

import { EventService } from './event.service';

const appRoutes: Routes = [
  { path: '', component: RootComponent },
  { path: 'about', component: AboutComponent },
  { path: 'events', component: EventsComponent },
  { path: 'create-event', component: CreateEventComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'event/:id', component: EventComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    EventsComponent,
    RootComponent,
    AdminComponent,
    CreateEventComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
