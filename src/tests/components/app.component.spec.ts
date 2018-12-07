// Angular stuff
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

// Component being tested
import { AppComponent } from '../../app/components/app/app.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(': should create', () => {
    expect(component).toBeDefined();
  });

  it(': should contain router-outlet', () => {
    el = fixture.debugElement.query(By.css('#router-outlet'));
    expect(el).not.toBe(undefined);
    expect(el).not.toBe(null);
  });
});
