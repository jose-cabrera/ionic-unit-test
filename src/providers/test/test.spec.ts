import {TestProvider} from './test';


describe('testService', () => {
  let service: TestProvider;

  beforeEach(() => {
    service = new TestProvider();
  });

  it('should return the sum of the two numbers', function () {

    let result: number = service.suma(5, 9);

    expect(result).toBe(14);

  });

});
