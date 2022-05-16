import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaCampeonatoComponent } from './tabela-campeonato.component';

describe('TabelaCampeonatoComponent', () => {
  let component: TabelaCampeonatoComponent;
  let fixture: ComponentFixture<TabelaCampeonatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaCampeonatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaCampeonatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
