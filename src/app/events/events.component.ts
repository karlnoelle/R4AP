import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { Event } from '../event.model';



@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})

export class EventsComponent implements OnInit {

  events: Event[];

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit() {
    this.fetchEvents();
  }
  
  fetchEvents() {
    this.eventService.getEvents().subscribe((data: Event[]) => {
      this.events = data;
      console.log('Data requested...');
      console.log(this.events);
    });
  }

  viewEvent(id) {
    this.eventService.getEventById(id).subscribe((data: Event[]) => {
      this.router.navigate([`/event/${id}`]);
    });
  }
}
