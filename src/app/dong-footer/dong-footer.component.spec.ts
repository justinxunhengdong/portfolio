import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DongFooterComponent } from './dong-footer.component';

describe('DongFooterComponent', () => {
  let component: DongFooterComponent;
  let fixture: ComponentFixture<DongFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DongFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DongFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
