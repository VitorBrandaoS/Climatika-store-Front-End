import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarProdutoComponent } from './cadastrar-produto.component';

describe('CadastrarProdutoComponent', () => {
  let component: CadastrarProdutoComponent;
  let fixture: ComponentFixture<CadastrarProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
