import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevmenuComponent } from './devmenu.component';

describe('DevmenuComponent', () => {
  let component: DevmenuComponent;
  let fixture: ComponentFixture<DevmenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevmenuComponent]
    });
    fixture = TestBed.createComponent(DevmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
