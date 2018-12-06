import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityTypeUpdateComponent } from './activity-type-update.component';

describe('ActivityTypeUpdateComponent', () => {
  let component: ActivityTypeUpdateComponent;
  let fixture: ComponentFixture<ActivityTypeUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityTypeUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityTypeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
