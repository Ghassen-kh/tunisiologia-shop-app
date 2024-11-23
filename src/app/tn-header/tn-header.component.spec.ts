import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TnHeaderComponent } from './tn-header.component';

describe('TnHeaderComponent', () => {
  let component: TnHeaderComponent;
  let fixture: ComponentFixture<TnHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TnHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TnHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
