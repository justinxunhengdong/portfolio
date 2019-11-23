import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DongHeaderComponent } from './dong-header.component';

describe('DongHeaderComponent', () => {
  let component: DongHeaderComponent;
  let fixture: ComponentFixture<DongHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DongHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DongHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
