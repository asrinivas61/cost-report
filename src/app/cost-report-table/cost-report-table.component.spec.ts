import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostReportTableComponent } from './cost-report-table.component';

describe('CostReportTableComponent', () => {
  let component: CostReportTableComponent;
  let fixture: ComponentFixture<CostReportTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostReportTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostReportTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
