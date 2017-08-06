// Angular stuff
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { async } from '@angular/core/testing';

// Component being tested
import { AboutComponent } from '../../about/about.component';
import { UserConfig } from '../../../config/user.config';

describe('AboutComponent', () => {

  let comp: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  // 1st beforeEach to run: async beforeEach
  beforeEach(async(() => {
    // Configure the testing module
    TestBed.configureTestingModule({
      declarations: [ AboutComponent ], // declare the test component
    })
    .compileComponents();  // compile template and css
  }));

  // 2nd beforeEach to run: synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);

    comp = fixture.componentInstance; // Component test instance
  });

  it(': profile picture should display correct headshot', () => {
    // Get any changes onf the testing fixture
    fixture.detectChanges();

    // Get the profile-picture
    de = fixture.debugElement.query(By.css('#profile-picture'));
    el = de.nativeElement;
  
    expect(el.getAttribute('src')).toEqual('/assets/images/headshot.jpg');
  });

  it(': profile picture should have correct alt text', () => {
    // Get any changes onf the testing fixture
    fixture.detectChanges();

    // Get the profile-picture
    de = fixture.debugElement.query(By.css('#profile-picture'));
    el = de.nativeElement;
  
    expect(el.getAttribute('alt')).toEqual('Brett Oberg');
  });

  it(': software portfolio button should be present', () => {
    // Get any changes onf the testing fixture
    fixture.detectChanges();

    // Get the profile-picture
    de = fixture.debugElement.query(By.css('#btn-software-portfolio'));
    el = de.nativeElement;
  
    expect(el.innerHTML).toEqual('Software Portfolio');
  });

  it(': software portfolio should link to /software', () => {
    // Get any changes onf the testing fixture
    fixture.detectChanges();

    // Get the profile-picture
    de = fixture.debugElement.query(By.css('#btn-software-portfolio'));
    el = de.nativeElement;
  
    expect(el.getAttribute('href')).toEqual('/software');
  });

  it(': photography portfolio should be present', () => {
    // Get any changes onf the testing fixture
    fixture.detectChanges();

    // Get the profile-picture
    de = fixture.debugElement.query(By.css('#btn-photography-portfolio'));
    el = de.nativeElement;
  
    expect(el.innerHTML).toEqual('Photography Portfolio');
  });

  it(': photography portfolio should link to /photography', () => {
    // Get any changes onf the testing fixture
    fixture.detectChanges();

    // Get the profile-picture
    de = fixture.debugElement.query(By.css('#btn-photography-portfolio'));
    el = de.nativeElement;
  
    expect(el.getAttribute('href')).toEqual('/photography');
  });
});