// Angular stuff
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

// Component being tested
import { AppComponent } from '../../app/components/app/app.component';

describe('AppComponent', () => {

  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(': should create', () => {
    expect(comp).toBeDefined();
  });

  it(': should contain router-outlet', () => {
    de = fixture.debugElement.query(By.css('#router-outlet'));

    expect(de).not.toBe(undefined);
    expect(de).not.toBe(null);
  });
});
