import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityTypeDetailComponent } from './activity-type-detail.component';

describe('ActivityTypeDetailComponent', () => {
  let component: ActivityTypeDetailComponent;
  let fixture: ComponentFixture<ActivityTypeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityTypeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityTypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
