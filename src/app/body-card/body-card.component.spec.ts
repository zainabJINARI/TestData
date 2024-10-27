import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCardComponent } from './body-card.component';

describe('BodyCardComponent', () => {
  let component: BodyCardComponent;
  let fixture: ComponentFixture<BodyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
