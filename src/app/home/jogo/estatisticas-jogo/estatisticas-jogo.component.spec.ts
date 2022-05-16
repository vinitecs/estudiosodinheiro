import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatisticasJogoComponent } from './estatisticas-jogo.component';

describe('EstatisticasJogoComponent', () => {
  let component: EstatisticasJogoComponent;
  let fixture: ComponentFixture<EstatisticasJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstatisticasJogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatisticasJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
