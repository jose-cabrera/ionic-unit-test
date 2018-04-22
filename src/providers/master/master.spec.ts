import {MasterProvider} from './master';
import {TestProvider} from '../test/test';
import {TestBed} from '@angular/core/testing';


describe('testService', () => {
  let master: MasterProvider;
  let value: jasmine.SpyObj<TestProvider>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('TestProvider', ['suma']);

    TestBed.configureTestingModule({
      // Provide both the service-to-test and its (spy) dependency
      providers: [
        MasterProvider,
        {provide: TestProvider, useValue: spy}
      ]
    });
    // Inject both the service-to-test and its (spy) dependency
    master = TestBed.get(MasterProvider);
    value = TestBed.get(TestProvider);
  });

  it('should return the sum of the two numbers', function () {

    const stubValue = 14;
    value.suma.and.returnValue(stubValue);

    let result: number = master.realizarSuma(5, 9);

    expect(result).toBe(14);

  });

});
