import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydishesComponent } from './mydishes.component';

describe('MydishesComponent', () => {
  let component: MydishesComponent;
  let fixture: ComponentFixture<MydishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MydishesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MydishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
