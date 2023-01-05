import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistinctoperatorComponent } from './distinctoperator.component';

describe('DistinctoperatorComponent', () => {
  let component: DistinctoperatorComponent;
  let fixture: ComponentFixture<DistinctoperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistinctoperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistinctoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
