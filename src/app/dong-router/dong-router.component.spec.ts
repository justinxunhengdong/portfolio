import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DongRouterComponent } from './dong-router.component';

describe('DongRouterComponent', () => {
  let component: DongRouterComponent;
  let fixture: ComponentFixture<DongRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DongRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DongRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
