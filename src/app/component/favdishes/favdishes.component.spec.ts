import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavdishesComponent } from './favdishes.component';

describe('FavdishesComponent', () => {
  let component: FavdishesComponent;
  let fixture: ComponentFixture<FavdishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavdishesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavdishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
