import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaycommentComponent } from './displaycomment.component';

describe('DisplaycommentComponent', () => {
  let component: DisplaycommentComponent;
  let fixture: ComponentFixture<DisplaycommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplaycommentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaycommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
