import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogosPrincipaisComponent } from './jogos-principais.component';

describe('JogosPrincipaisComponent', () => {
  let component: JogosPrincipaisComponent;
  let fixture: ComponentFixture<JogosPrincipaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogosPrincipaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogosPrincipaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
