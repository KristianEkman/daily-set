import { Injectable } from '@angular/core';
import seedrandom from 'seedrandom';
import { Utils } from './utils';

@Injectable({
  providedIn: 'root',
})
export class RandomService {
  private rng: seedrandom.PRNG = seedrandom(Utils.getToday());

  constructor() {
    this.rng = seedrandom(Utils.getToday());
  }

  setSeed() {
    this.rng = seedrandom(Utils.getToday());
  }

  removeSeed() {
    this.rng = seedrandom();
  }

  getRandom() {
    return this.rng();
  }

  getRandomInt(min: number, max: number) {
    return Math.floor(this.rng() * (max - min + 1)) + min;
  }
}
