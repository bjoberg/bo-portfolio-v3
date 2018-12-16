import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Title } from '@angular/platform-browser';
import { AboutComponent } from '../../app/components/about/about.component';
import { NavigationComponent } from '../../app/components/navigation/navigation.component';
import { FooterComponent } from '../../app/components/footer/footer.component';
import { DocumentRef } from '../../app/services/documentRef.service';
import { UserConfig } from '../../app/config/user.config';

describe('AboutComponent', () => {

  let comp: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutComponent,
        NavigationComponent,
        FooterComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        Title,
        DocumentRef
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(': should create', () => {
    expect(comp).toBeDefined();
  });

  it(': should have the correct (meta) page title', () => {
    const pageTitle = TestBed.get(Title);
    expect(pageTitle.getTitle()).toBe('About - Brett Oberg');
  });

  it(': should contain "navigation-component"', () => {
    el = fixture.debugElement.query(By.css('#navigation-component'));

    expect(el).not.toBe(undefined);
    expect(el).not.toBe(null);
  });

  it(': should contain "about--flex-container"', () => {
    el = fixture.debugElement.query(By.css('#about--flex-container'));

    expect(el).not.toBe(undefined);
    expect(el).not.toBe(null);
  });

  it(': should contain "about--overview-group"', () => {
    el = fixture.debugElement.query(By.css('#about--overview-group'));

    expect(el).not.toBe(undefined);
    expect(el).not.toBe(null);
  });

  it(': "avatar" should have correct "src" attribute', () => {
    el = fixture.debugElement.query(By.css('#about--avatar'));
    const src = el.nativeElement.getAttribute('src');

    expect(src).toEqual('/assets/images/headshot.jpg');
  });

  it(': "avatar" should have correct "alt" attribute', () => {
    el = fixture.debugElement.query(By.css('#about--avatar'));
    const alt = el.nativeElement.getAttribute('alt');

    expect(alt).toEqual('Brett Oberg');
  });

  it(': "photography button" should have valid link', () => {
    el = fixture.debugElement.query(By.css('#about--photography-btn'));
    const link = el.nativeElement.getAttribute('href');

    expect(link).toEqual('/photography');
  });

  it(': "photography button" displays valid text', () => {
    el = fixture.debugElement.query(By.css('#about--photography-btn'));
    const text = el.nativeElement.innerText;

    expect(text).toEqual('Photography Portfolio');
  });

  it(': "overview title" displays valid text', () => {
    el = fixture.debugElement.query(By.css('#about--overview-title'));
    const text = el.nativeElement.innerText;

    expect(text).toEqual('Overview');
  });

  it(': "job" displays valid text', () => {
    el = fixture.debugElement.query(By.css('#about--job'));
    const text = el.nativeElement.innerText;

    expect(text).toEqual('Software Engineer @ GE');
  });

  it(': "location" displays valid text', () => {
    el = fixture.debugElement.query(By.css('#about--location'));
    const text = el.nativeElement.innerText;

    expect(text).toEqual('Chicago, IL');
  });

  it(': "email" displays valid text', () => {
    el = fixture.debugElement.query(By.css('#about--email'));
    const text = el.nativeElement.innerText;

    expect(text).toEqual('brett@obergmail.com');
  });

  it(': "email" should have valid "href" attribute', () => {
    el = fixture.debugElement.query(By.css('#about--email'));
    const href = el.nativeElement.getAttribute('href');

    expect(href).toEqual('mailto:brett@obergmail.com');
  });

  it(': "social media title" should display valid text', () => {
    el = fixture.debugElement.query(By.css('#about--social-media-title'));
    const text = el.nativeElement.innerText;

    expect(text).toEqual('Social Media');
  });

  it(': should contain valid social items', () => {
    el = fixture.debugElement.query(By.css('#about--social-media-list'));
    const nativeEl = el.nativeElement;
    let i = 0;
    for (const item of nativeEl.children) {
      expect(item.children[0].className).toBe(`fa ${UserConfig.social[i].fa_icon}`);
      expect(item.children[1].href).toBe(UserConfig.social[i].url);
      expect(item.children[1].id).toBe(`about--social-media-${UserConfig.social[i].title}`);
      expect(item.children[1].innerText).toBe(UserConfig.social[i].title);
      i++;
    }
  });

  it(': should contain "about--details-group"', () => {
    el = fixture.debugElement.query(By.css('#about--details-group'));

    expect(el).not.toBe(undefined);
    expect(el).not.toBe(null);
  });

  it(': "Details title" should display valid text', () => {
    el = fixture.debugElement.query(By.css('#about--details-title'));
    const text = el.nativeElement.innerText;

    expect(text).toEqual('About');
  });

  it(': "Content Description Long" should display valid text', () => {
    el = fixture.debugElement.query(By.css('#about--content-description-long'));
    const html = el.nativeElement.innerHTML;

    expect(html).toEqual(UserConfig.about.description_long);
  });

  it(': should contain footer-component', () => {
    el = fixture.debugElement.query(By.css('#footer-component'));

    expect(el).not.toBe(undefined);
    expect(el).not.toBe(null);
  });
});
