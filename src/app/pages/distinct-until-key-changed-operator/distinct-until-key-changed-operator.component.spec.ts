import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistinctUntilKeyChangedOperatorComponent } from './distinct-until-key-changed-operator.component';

describe('DistinctUntilKeyChangedOperatorComponent', () => {
  let component: DistinctUntilKeyChangedOperatorComponent;
  let fixture: ComponentFixture<DistinctUntilKeyChangedOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistinctUntilKeyChangedOperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistinctUntilKeyChangedOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
