import { TestBed, async, inject } from '@angular/core/testing';

import { AddChampAndTeamGuard } from './add-champ-and-team.guard';

describe('AddChampAndTeamGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddChampAndTeamGuard]
    });
  });

  it('should ...', inject([AddChampAndTeamGuard], (guard: AddChampAndTeamGuard) => {
    expect(guard).toBeTruthy();
  }));
});
