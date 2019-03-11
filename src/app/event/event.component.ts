import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { EventService } from '../event.service';
import { Event } from '../event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  id: String;
  event: any = {};


  constructor(private EventService: EventService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this.id = params.id;
    //   this.EventService.getEventById(this.id).subscribe(res => {
    //     this.event = res;
    //   })
    // })
  }

}
