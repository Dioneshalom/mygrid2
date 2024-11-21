import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticulosComponent } from './articulos.component';
import { Component } from '@angular/core'; 


@Component({
  selector: 'ag-grid-angular',
  template: ''
})
class MockAgGridComponent {}

describe('ArticulosComponent', () => {
  let component: ArticulosComponent;
  let fixture: ComponentFixture<ArticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulosComponent, MockAgGridComponent ] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

