import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DobbelstenenComponent } from './dobbelstenen.component';

describe('DobbelstenenComponent', () => {
  let component: DobbelstenenComponent;
  let fixture: ComponentFixture<DobbelstenenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DobbelstenenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DobbelstenenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
