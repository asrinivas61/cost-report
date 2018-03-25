import { TestBed, inject } from '@angular/core/testing';

import { CostReportTableService } from './cost-report-table.service';

describe('CostReportTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CostReportTableService]
    });
  });

  it('should be created', inject([CostReportTableService], (service: CostReportTableService) => {
    expect(service).toBeTruthy();
  }));
});
