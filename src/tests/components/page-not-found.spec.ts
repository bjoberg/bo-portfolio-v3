// Angular stuff
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Title } from '@angular/platform-browser';

// Component being tested
import { PageNotFoundComponent } from '../../app/components/page-not-found/page-not-found.component';
import { NavigationComponent } from '../../app/components/navigation/navigation.component';
import { FooterComponent } from '../../app/components/footer/footer.component';
import { DocumentRef } from '../../app/services/documentRef.service';

describe('PageNotFoundComponent', () => {

  let comp: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageNotFoundComponent,
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
    fixture = TestBed.createComponent(PageNotFoundComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(': should create', () => {
    expect(comp).toBeDefined();
  });

  it(': should have the correct (meta) page title', () => {
    const pageTitle = TestBed.get(Title);
    expect(pageTitle.getTitle()).toBe('Page not found');
  });

  it(': should contain navigation-component', () => {
    el = fixture.debugElement.query(By.css('#navigation-component'));

    expect(el).not.toBe(undefined);
    expect(el).not.toBe(null);
  });

  it(': should display valid title', () => {
    el = fixture.debugElement.query(By.css('#page-not-found--title'));
    const text = el.nativeElement.innerText;

    expect(text).toEqual('Sorry, page not found.');
  });

  it(': should contain photography button', () => {
    el = fixture.debugElement.query(By.css('#page-not-found--photography-btn'));

    expect(el).not.toBe(undefined);
    expect(el).not.toBe(null);
  });

  it(': photography button should have valid link', () => {
    el = fixture.debugElement.query(By.css('#page-not-found--photography-btn'));
    const link = el.nativeElement.getAttribute('href');

    expect(link).toEqual('/photography');
  });

  it(': photography button displays valid text', () => {
    el = fixture.debugElement.query(By.css('#page-not-found--photography-btn'));
    const text = el.nativeElement.innerText;

    expect(text).toEqual('Photography Portfolio');
  });

  it(': should contain footer-component', () => {
    el = fixture.debugElement.query(By.css('#footer-component'));

    expect(el).not.toBe(undefined);
    expect(el).not.toBe(null);
  });
});
