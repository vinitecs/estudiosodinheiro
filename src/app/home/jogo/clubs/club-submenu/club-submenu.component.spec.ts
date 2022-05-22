import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubSubmenuComponent } from './club-submenu.component';

describe('ClubSubmenuComponent', () => {
  let component: ClubSubmenuComponent;
  let fixture: ComponentFixture<ClubSubmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubSubmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
