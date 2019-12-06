import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesSallesComponent } from './listes-salles.component';

describe('ListesSallesComponent', () => {
  let component: ListesSallesComponent;
  let fixture: ComponentFixture<ListesSallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListesSallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesSallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
