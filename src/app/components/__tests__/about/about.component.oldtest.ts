
// // Angular stuff
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { DebugElement } from '@angular/core';
// import { async } from '@angular/core/testing';

// // Component being tested
// import { AboutComponent } from '../../about/about.component';
// import { UserConfig } from '../../../config/user.config';

// describe('AboutComponent', () => {

//   let comp: AboutComponent;
//   let fixture: ComponentFixture<AboutComponent>;
//   let de: DebugElement;
//   let el: HTMLElement;

//   // 1st beforeEach to run: async beforeEach
//   beforeEach(async(() => {
//     // Configure the testing module
//     TestBed.configureTestingModule({
//       declarations: [ AboutComponent ], // declare the test component
//     })
//     .compileComponents();  // compile template and css
//   }));

//   // 2nd beforeEach to run: synchronous beforeEach
//   beforeEach(() => {
//     fixture = TestBed.createComponent(AboutComponent);

//     comp = fixture.componentInstance; // Component test instance
//   });

//   /***************************** Profile Picture *******************************/
//   it(': profile picture should display correct headshot', () => {
//     fixture.detectChanges();
//     de = fixture.debugElement.query(By.css('#img-profile-picture'));
//     el = de.nativeElement;

//     expect(el.getAttribute('src')).toEqual(UserConfig.about.avatar);
//   });

//   it(': profile picture should have correct alt text', () => {
//     fixture.detectChanges();
//     de = fixture.debugElement.query(By.css('#img-profile-picture'));
//     el = de.nativeElement;

//     expect(el.getAttribute('alt')).toEqual('Brett Oberg');
//   });

//   /***************************** Software Portfolio *******************************/
//   it(': software portfolio button should be present', () => {
//     fixture.detectChanges();
//     de = fixture.debugElement.query(By.css('#btn-software-portfolio'));
//     el = de.nativeElement;

//     expect(el.innerHTML).toEqual('Software Portfolio');
//   });

//   it(': software portfolio should link to /software', () => {
//     fixture.detectChanges();
//     de = fixture.debugElement.query(By.css('#btn-software-portfolio'));
//     el = de.nativeElement;

//     expect(el.getAttribute('href')).toEqual('/software');
//   });

//   /***************************** Photography Portfolio *******************************/
//   it(': photography portfolio should be present', () => {
//     fixture.detectChanges();
//     de = fixture.debugElement.query(By.css('#btn-photography-portfolio'));
//     el = de.nativeElement;

//     expect(el.innerHTML).toEqual('Photography Portfolio');
//   });

//   it(': photography portfolio should link to /photography', () => {
//     fixture.detectChanges();
//     de = fixture.debugElement.query(By.css('#btn-photography-portfolio'));
//     el = de.nativeElement;

//     expect(el.getAttribute('href')).toEqual('/photography');
//   });

//   /***************************** Overview title *******************************/
//   it(': should display an overview title', () => {
//     fixture.detectChanges();
//     de = fixture.debugElement.query(By.css('#title-overview'));
//     el = de.nativeElement;

//     expect(el.innerText).toEqual('Overview');
//   });

//   /***************************** Current role *******************************/
//   it(': should display my current role', () => {
//     fixture.detectChanges();
//     de = fixture.debugElement.query(By.css('#content-currently'));
//     el = de.nativeElement;

//     expect(el.innerText).toEqual(UserConfig.about.currently);
//   });

//   /***************************** Location *******************************/
//   it(': should display my location', () => {
//     fixture.detectChanges();
//     de = fixture.debugElement.query(By.css('#content-location'));
//     el = de.nativeElement;

//     expect(el.innerText).toEqual(UserConfig.about.location);
//   });

//   /***************************** Email *******************************/
//   it(': should display my email', () => {
//     fixture.detectChanges();
//     de = fixture.debugElement.query(By.css('#content-email'));
//     el = de.nativeElement;

//     expect(el.innerText).toEqual(UserConfig.about.email);
//   });

//   /***************************** Social Media title *******************************/
//   it(': should display a social media title', () => {
//     fixture.detectChanges();
//     de = fixture.debugElement.query(By.css('#title-social-media'));
//     el = de.nativeElement;

//     expect(el.innerText).toEqual('Social Media');
//   });

//   /***************************** Social Media list *******************************/
//   it(': should display correct number of social media accounts', () => {
//     fixture.detectChanges();
//     de = fixture.debugElement.query(By.css('#list-social-media'));
//     el = de.nativeElement;

//     expect(el.childElementCount).toEqual(UserConfig.social.length);
//   });

//   it(': should have social media accounts information with the correct icon, url, and title', () => {
//     fixture.detectChanges();
//     de = fixture.debugElement.query(By.css('#list-social-media'));
//     el = de.nativeElement;

//     for (let i = 0; i < el.childElementCount; i++) {
//       // Test the icon
//       expect(el.children.item(i).children.item(0).classList).toContain(UserConfig.social[i].fa_icon);

//       // Test the url
//       expect(el.children.item(i).children.item(1).getAttribute('href')).toContain(UserConfig.social[i].url);

//       // Test the title
//       expect(el.children.item(i).children.item(1).textContent).toContain(UserConfig.social[i].title);
//     }
//   });

//   /***************************** About title *******************************/
//   it(': should have an About title', () => {
//     fixture.detectChanges();
//     de = fixture.debugElement.query(By.css('#title-about'));
//     el = de.nativeElement;

//     expect(el.innerText).toEqual('About');
//   });

//   /***************************** Long description *******************************/
//   it(': should have a long description', () => {
//     fixture.detectChanges();
//     de = fixture.debugElement.query(By.css('#content-description-long'));
//     el = de.nativeElement;

//     expect(el.innerHTML).toEqual(UserConfig.about.description_long);
//   });

//   /***************************** Skills title *******************************/
//   it(': should have a Skills title', () => {
//     fixture.detectChanges();
//     de = fixture.debugElement.query(By.css('#title-skills'));
//     el = de.nativeElement;

//     expect(el.innerText).toEqual('Skills');
//   });

//   /***************************** Skills list *******************************/
//   it(': should display correct number of skill groups', () => {
//     fixture.detectChanges();
//     de = fixture.debugElement.query(By.css('#group-of-skills'));
//     el = de.nativeElement;

//     expect(el.childElementCount).toEqual(UserConfig.skills.length);
//   });

//   it(': should have correct skill group titles', () => {
//     fixture.detectChanges();
//     de = fixture.debugElement.query(By.css('#group-of-skills'));
//     el = de.nativeElement;

//     for (let i = 0; i < el.childElementCount; i++) {
//       // Test skill group title
//       const skillGroup = el.children.item(i);
//       expect(skillGroup.children.item(0).textContent).toEqual(UserConfig.skills[i].title);
//     }
//   });

//   it(': should have correct number of skill group component items', () => {
//     fixture.detectChanges();
//     de = fixture.debugElement.query(By.css('#group-of-skills'));
//     el = de.nativeElement;

//     for (let i = 0; i < el.childElementCount; i++) {
//       const skillGroup = el.children.item(i);
//       expect(skillGroup.children.item(1).childElementCount).toEqual(UserConfig.skills[i].components.length);
//     }
//   });

//   it(': should have valid skill group component item content (title & Url)', () => {
//     fixture.detectChanges();
//     de = fixture.debugElement.query(By.css('#group-of-skills'));
//     el = de.nativeElement;

//     for (let i = 0; i < el.childElementCount; i++) {
//       const skillGroup = el.children.item(i);

//       for (let j = 0; j < skillGroup.children.item(1).childElementCount; j++) {
//         const skillGroupComponentItem = skillGroup.children.item(1).children.item(j);

//         // Test url
//         expect(skillGroupComponentItem.children.item(0).getAttribute('href')).toContain(UserConfig.skills[i].components[j].url);

//         // Test title
//         expect(skillGroupComponentItem.children.item(0).textContent).toContain(UserConfig.skills[i].components[j].title);
//       }
//     }
//   });

//   /***************************** Recognition title *******************************/
//   it(': should display correct number of skill groups', () => {
//     fixture.detectChanges();
//     de = fixture.debugElement.query(By.css('#title-recognition'));
//     el = de.nativeElement;

//     expect(el.innerText).toEqual('Recognition');
//   });


//   /***************************** Recognition list *******************************/
//   it(': should display correct number of recognition items', () => {
//     fixture.detectChanges();
//     de = fixture.debugElement.query(By.css('#list-recognition'));
//     el = de.nativeElement;

//     expect(el.childElementCount).toEqual(UserConfig.recognition.length);
//   });

//   it(': should display correct recognition conent (link url, link text, and full recognition string)', () => {
//     fixture.detectChanges();
//     de = fixture.debugElement.query(By.css('#list-recognition'));
//     el = de.nativeElement;

//     for (let i = 0; i < el.childElementCount; i++) {
//       // Test link url
//       expect(el.children.item(i).children.item(0).getAttribute('href')).toEqual(UserConfig.recognition[i].url);

//       // Test link text
//       expect(el.children.item(i).children.item(0).textContent).toEqual(UserConfig.recognition[i].title);

//       // Test recognition string
//       expect(el.children.item(i).textContent.trim()).toEqual(UserConfig.recognition[i].title +
//         ' - ' + UserConfig.recognition[i].description);
//     }
//   });
// });
