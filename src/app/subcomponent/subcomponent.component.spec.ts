import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SubcomponentComponent } from './subcomponent.component';

describe('SubcomponentComponent', () => {
  let component: SubcomponentComponent;
  let fixture: ComponentFixture<SubcomponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
