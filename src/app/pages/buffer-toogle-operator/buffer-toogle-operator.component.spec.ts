import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BufferToogleOperatorComponent } from './buffer-toogle-operator.component';

describe('BufferToogleOperatorComponent', () => {
  let component: BufferToogleOperatorComponent;
  let fixture: ComponentFixture<BufferToogleOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BufferToogleOperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BufferToogleOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
