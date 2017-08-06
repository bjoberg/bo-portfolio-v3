// // Angular stuff
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { DebugElement } from '@angular/core';
// import { async } from '@angular/core/testing';

// // Component being tested
// import { AppComponent } from '../../app.component';

// describe('AppComponent', () => {

//   let comp: AppComponent;
//   let fixture: ComponentFixture<AppComponent>;
//   let de: DebugElement;
//   let el: HTMLElement;

//   // 1st beforeEach to run: async beforeEach
//   beforeEach(async(() => {
//     // Configure the testing module
//     TestBed.configureTestingModule({
//       declarations: [ AppComponent ], // declare the test component
//     })
//     .compileComponents();  // compile template and css
//   }));

//   // 2nd beforeEach to run: synchronous beforeEach
//   beforeEach(() => {
//     fixture = TestBed.createComponent(AppComponent);

//     comp = fixture.componentInstance; // Component test instance
//   });

//   it(': should contain <navigation-component>', () => {
//     // Get any changes onf the testing fixture
//     fixture.detectChanges();

//     // Get the profile-picture
//     de = fixture.debugElement.query(By.css('#navigation-component'));
//     el = de.nativeElement;
  
//     expect(el).toEqual('navigation-component');
//   });
// });
