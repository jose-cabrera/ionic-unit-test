
import {Injectable} from '@angular/core';

/*
  Generated class for the TestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TestProvider {

  constructor() {
  }

  suma(num1: number, num2: number) {
    return num1 + num2;
  }

}
