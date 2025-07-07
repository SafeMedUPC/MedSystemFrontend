import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringServiceComponent } from './monitoring-service.component';

describe('MonitoringServiceComponent', () => {
  let component: MonitoringServiceComponent;
  let fixture: ComponentFixture<MonitoringServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonitoringServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitoringServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
