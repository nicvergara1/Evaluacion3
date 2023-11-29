import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CerrarsesionPage } from './cerrarsesion.page';

describe('CerrarsesionPage', () => {
  let component: CerrarsesionPage;
  let fixture: ComponentFixture<CerrarsesionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CerrarsesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
