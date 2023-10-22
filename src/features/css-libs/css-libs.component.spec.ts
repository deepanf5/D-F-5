import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssLibsComponent } from './css-libs.component';

describe('CssLibsComponent', () => {
  let component: CssLibsComponent;
  let fixture: ComponentFixture<CssLibsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CssLibsComponent]
    });
    fixture = TestBed.createComponent(CssLibsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
