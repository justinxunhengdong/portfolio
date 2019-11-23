import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTilesetComponent } from './content-tileset.component';

describe('ContentTilesetComponent', () => {
  let component: ContentTilesetComponent;
  let fixture: ComponentFixture<ContentTilesetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentTilesetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTilesetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
