// Angular stuff
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Title } from '@angular/platform-browser';

// Component being tested
import { SoftwareComponent } from '../../app/components/software/software.component';
import { NavigationComponent } from '../../app/components/navigation/navigation.component';
import { FooterComponent } from '../../app/components/footer/footer.component';
import { DocumentRef } from '../../app/services/documentRef.service';

describe('SoftwareComponent', () => {

  let comp: SoftwareComponent;
  let fixture: ComponentFixture<SoftwareComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SoftwareComponent,
        NavigationComponent,
        FooterComponent, ],
      imports: [ RouterTestingModule ],
      providers: [
        Title,
        DocumentRef
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(': should create', () => {
    expect(comp).toBeDefined();
  });

  it(': should have the correct (meta) page title', () => {
    const pageTitle = TestBed.get(Title);
    expect(pageTitle.getTitle()).toBe('Software - Brett Oberg');
  });

  it(': should contain navigation-component', () => {
    el = fixture.debugElement.query(By.css('#navigation-component'));

    expect(el).not.toBe(undefined);
    expect(el).not.toBe(null);
  });

  it(': should contain title', () => {
    el = fixture.debugElement.query(By.css('#software--title'));

    expect(el).not.toBe(undefined);
    expect(el).not.toBe(null);
  });

  it(': display correct title', () => {
    el = fixture.debugElement.query(By.css('#software--title'));
    const text = el.nativeElement;

    expect(text.innerText).toEqual('Software');
  });

  it(': should contain content', () => {
    el = fixture.debugElement.query(By.css('#software--content'));

    expect(el).not.toBe(undefined);
    expect(el).not.toBe(null);
  });

  it(': display correct content', () => {
    el = fixture.debugElement.query(By.css('#software--content'));
    const text = el.nativeElement;

    expect(text.innerText).toEqual('This page is currently under construction.');
  });

  it(': should contain footer-component', () => {
    el = fixture.debugElement.query(By.css('#footer-component'));

    expect(el).not.toBe(undefined);
    expect(el).not.toBe(null);
  });
});
