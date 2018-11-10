import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event.model';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})

export class EventsComponent implements OnInit {

  events: Event[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    // this.eventService.getEvents().subscribe((events) => {
    //   console.log(events);
    // });
    this.fetchEvents();
  }
  
  fetchEvents() {
    this.eventService.getEvents().subscribe((data: Event[]) => {
      this.events = data;
      console.log('Data requested...');
      console.log(this.events);
    });
  }
}
