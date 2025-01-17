import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormgroupComponent } from './formgroup.component';

describe('FormgroupComponent', () => {
  let component: FormgroupComponent;
  let fixture: ComponentFixture<FormgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormgroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
