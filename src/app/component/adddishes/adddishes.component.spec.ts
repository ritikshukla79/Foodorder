import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddishesComponent } from './adddishes.component';

describe('AdddishesComponent', () => {
  let component: AdddishesComponent;
  let fixture: ComponentFixture<AdddishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddishesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdddishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
