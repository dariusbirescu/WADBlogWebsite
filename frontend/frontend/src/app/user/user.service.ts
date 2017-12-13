import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {
  private devicesUrl = "http://localhost:8081/";
  constructor(private messageService: MessageService) { }

  getDevices() {
    return this.http.get(this.usersUrl).map(res => res.json());
  }
}