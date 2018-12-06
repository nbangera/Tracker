import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ActivityTypeEffects } from './activity-type.effects';

describe('ActivityTypeEffects', () => {
  let actions$: Observable<any>;
  let effects: ActivityTypeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ActivityTypeEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ActivityTypeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
