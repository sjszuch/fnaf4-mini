import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinscreenComponent } from './winscreen.component';

describe('WinscreenComponent', () => {
  let component: WinscreenComponent;
  let fixture: ComponentFixture<WinscreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WinscreenComponent]
    });
    fixture = TestBed.createComponent(WinscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
