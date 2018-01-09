import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDsuComponent } from './add-dsu.component';

describe('AddDsuComponent', () => {
  let component: AddDsuComponent;
  let fixture: ComponentFixture<AddDsuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDsuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
