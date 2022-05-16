import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableJogosComponent } from './table-jogos.component';

describe('TableJogosComponent', () => {
  let component: TableJogosComponent;
  let fixture: ComponentFixture<TableJogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableJogosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableJogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
