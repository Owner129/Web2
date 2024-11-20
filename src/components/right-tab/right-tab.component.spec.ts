import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightTabComponent } from './right-tab.component';

describe('RightTabComponent', () => {
  let component: RightTabComponent;
  let fixture: ComponentFixture<RightTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
