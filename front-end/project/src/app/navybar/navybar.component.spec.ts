/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavybarComponent } from './navybar.component';

describe('NavybarComponent', () => {
  let component: NavybarComponent;
  let fixture: ComponentFixture<NavybarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavybarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavybarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
