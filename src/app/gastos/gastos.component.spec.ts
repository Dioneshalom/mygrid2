import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GastosComponent } from './gastos.component';
import { Component } from '@angular/core';

@Component({
  selector: 'ag-grid-angular',
  template: ''
})
class MockAgGridComponent {}

describe('GastosComponent', () => {
  let component: GastosComponent;
  let fixture: ComponentFixture<GastosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastosComponent, MockAgGridComponent ] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(GastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


