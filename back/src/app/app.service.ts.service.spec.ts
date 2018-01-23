/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { App.service.tsService } from './app.service.ts.service';

describe('Service: App.service.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [App.service.tsService]
    });
  });

  it('should ...', inject([App.service.tsService], (service: App.service.tsService) => {
    expect(service).toBeTruthy();
  }));
});