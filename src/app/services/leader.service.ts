import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  getLeaders(): Promise<Leader[]> {
    return new Promise(resolve => {
      // simulate server latency with 2secs delay
      setTimeout(() => resolve(LEADERS), 2000);
    });
  }

  getLeader(id: string): Promise<Leader> {
    return new Promise(resolve => {
      // simulate server latency with 2secs delay
      setTimeout(() => resolve(LEADERS.filter((dude) => (dude.id === id))[0]), 2000);
    });
  }

  getFeaturedLeader(): Promise<Leader> {
    return new Promise(resolve => {
      // simulate server latency with 2secs delay
      setTimeout(() => resolve(LEADERS.filter((dude) => dude.featured)[0]), 2000);
    });
  }

  constructor() { }
}
