import {Injectable} from '@angular/core';
import {TestProvider} from '../test/test';

/*
  Generated class for the MasterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MasterProvider {

  constructor(public service: TestProvider) {
  }

  realizarSuma(num1: number, num2: number) {
    return this.service.suma(num1, num2);
  }

}
