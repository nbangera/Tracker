import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityTypeCreateComponent } from './activity-type-create.component';

describe('ActivityTypeCreateComponent', () => {
  let component: ActivityTypeCreateComponent;
  let fixture: ComponentFixture<ActivityTypeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityTypeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
