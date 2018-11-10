import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get(`${this.uri}/events`);
  }

  getEventById(id) {
    return this.http.get(`${this.uri}/event/${id}`);
  }

  addEvent(name, description, time, date, location, address) {
    const event = {
      name: name,
      description: description,
      time: time,
      date: date,
      location: location,
      address: address
    };
      return this.http.post(`${this.uri}/create-event`, event);
  }
}
