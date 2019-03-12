import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  createForm: FormGroup;
  id: String;

  constructor(private eventService: EventService, private formBuilder: FormBuilder, private router: Router) {
    this.createForm = this.formBuilder.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      location: ['', Validators.required],
      address: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  addEvent(name, description, time, date, location, address) {
    this.eventService.addEvent(name, description, time, date, location, address).subscribe(() => {
      this.router.navigate([`/event/${this.id}`]);
    });
  }

  ngOnInit() {
  }

}
