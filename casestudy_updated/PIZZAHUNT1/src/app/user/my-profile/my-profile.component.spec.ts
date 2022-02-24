import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprofileComponent } from './my-profile.component';

describe('MyprofileComponent', () => {
  let component: MyprofileComponent;
  let fixture: ComponentFixture<MyprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
