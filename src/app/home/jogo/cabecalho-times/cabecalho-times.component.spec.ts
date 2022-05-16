import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoTimesComponent } from './cabecalho-times.component';

describe('CabecalhoTimesComponent', () => {
  let component: CabecalhoTimesComponent;
  let fixture: ComponentFixture<CabecalhoTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabecalhoTimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabecalhoTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
