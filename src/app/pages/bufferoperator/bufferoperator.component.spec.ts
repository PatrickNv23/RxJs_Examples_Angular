import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BufferoperatorComponent } from './bufferoperator.component';

describe('BufferoperatorComponent', () => {
  let component: BufferoperatorComponent;
  let fixture: ComponentFixture<BufferoperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BufferoperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BufferoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
