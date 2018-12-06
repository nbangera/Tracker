import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityTypeDeleteComponent } from './activity-type-delete.component';

describe('ActivityTypeDeleteComponent', () => {
  let component: ActivityTypeDeleteComponent;
  let fixture: ComponentFixture<ActivityTypeDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityTypeDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityTypeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
