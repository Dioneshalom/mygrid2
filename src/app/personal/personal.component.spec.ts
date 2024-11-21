import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonalComponent } from './personal.component';
import { Component } from '@angular/core';

@Component({
  selector: 'ag-grid-angular',
  template: ''
})
class MockAgGridComponent {}

describe('PersonalComponent', () => {
  let component: PersonalComponent;
  let fixture: ComponentFixture<PersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalComponent, MockAgGridComponent ] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

