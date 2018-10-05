import {CitiesModule} from './cities.module';

describe('CitiesModule', () => {
  let citiesModule: CitiesModule;

  beforeEach(() => {
    citiesModule = new CitiesModule();
  });

  it('should create an instance', () => {
    expect(citiesModule).toBeTruthy();
  });
});
