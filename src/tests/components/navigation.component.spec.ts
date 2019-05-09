import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigationComponent } from '../../app/components/navigation/navigation.component';
import { DocumentRef } from '../../app/services/documentRef.service';
import { NavigationConfig } from '../../app/config/navigation.config';
import { TestNavigationConfig, TestMobileNavigationConfig } from '../test-data/navigation.config.test';
const sinon = require('sinon');


describe('NavigationComponent', () => {

  let comp: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationComponent ],
      imports: [ RouterTestingModule ],
      providers: [ DocumentRef ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(': should create', () => {
    expect(comp).toBeDefined();
  });

  it(': desktopNavigationItemList should equal NavigationConfig', () => {
    expect(comp.desktopNavigationItemList).toEqual(NavigationConfig);
  });

  it(': resize() should call "displayMobile()', () => {
    const spy = sinon.spy(comp, 'displayMobile');
    const event = { target: { innerWidth: 42 }};

    comp.resize(event);

    expect(spy.withArgs(event.target.innerWidth).callCount).toEqual(1);
  });

  it(': resize() should not call "displayMobile()', () => {
    const spy = sinon.spy(comp, 'displayMobile');
    const event = { };

    comp.resize(null);
    comp.resize(undefined);
    comp.resize(event);

    expect(spy.callCount).toEqual(0);
  });

  it(': getMobileNavigationItemList() should return correct value with valid input', () => {
    const actual = comp.getMobileNavigationItemList(TestNavigationConfig);
    const expected = TestMobileNavigationConfig;

    expect(actual.length).toEqual(expected.length);
    let i = 0;
    actual.forEach(element => {
      expect(element.icon).toEqual(expected[i].icon);
      expect(element.isMobile).toEqual(expected[i].isMobile);
      expect(element.route).toEqual(expected[i].route);
      expect(element.title).toEqual(expected[i].title);
      expect(element.type).toEqual(expected[i].type);
      expect(element.url).toEqual(expected[i].url);
      i++;
    });
  });

  it(': getMobileNavigationItemList() should return correct value with invalid input', () => {
    let actual = comp.getMobileNavigationItemList(null);
    const expected = [];

    expect(actual).toEqual(expected);

    actual = comp.getMobileNavigationItemList(undefined);
    expect(actual).toEqual(expected);
  });

  it(': displayMobile() should return correct value with valid input', () => {
    expect(comp.displayMobile(960)).toEqual(true);
    expect(comp.displayMobile(959)).toEqual(true);
    expect(comp.displayMobile(961)).toEqual(false);
  });

});

describe('[Desktop] NavigationComponent', () => {

  let comp: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationComponent ],
      imports: [ RouterTestingModule ],
      providers: [ DocumentRef ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
    comp.displayMobileView = false;
    fixture.detectChanges();
  });

  it(': should create', () => {
    expect(comp).toBeDefined();
  });

  it(': should contain "navigation--toolbar-desktop"', () => {
    el = fixture.debugElement.query(By.css('#navigation--toolbar-desktop'));

    expect(el).not.toBe(undefined);
    expect(el).not.toBe(null);
  });

  it(': should contain valid navigation items"', () => {
    el = fixture.debugElement.query(By.css('#navigation--toolbar-list-desktop'));
    const nativeEl = el.nativeElement;
    let i = 0;
    for (const item of nativeEl.children) {
      expect(item.getAttribute('href')).toEqual(NavigationConfig[i].route);
      expect(item.innerText).toEqual(NavigationConfig[i].title);
      expect(item.className).toEqual(NavigationConfig[i].type);
      expect(item.getAttribute('ng-reflect-router-link-active')).toEqual('is-active');
      i++;
    }
  });
});

describe('[Mobile] NavigationComponent', () => {

  let comp: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationComponent ],
      imports: [ RouterTestingModule ],
      providers: [ DocumentRef ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
    comp.displayMobileView = true;
    fixture.detectChanges();
  });

  it(': should create', () => {
    expect(comp).toBeDefined();
  });

  it(': should contain "navigation--toolbar-mobile"', () => {
    el = fixture.debugElement.query(By.css('#navigation--toolbar-mobile'));

    expect(el).not.toBe(undefined);
    expect(el).not.toBe(null);
  });

  it(': should contain valid navigation items"', () => {
    el = fixture.debugElement.query(By.css('#navigation--toolbar-list-mobile'));
    const nativeEl = el.nativeElement;
    const mobileNavigationItems = comp.getMobileNavigationItemList(NavigationConfig);
    let i = 0;
    for (const item of nativeEl.children) {
      expect(item.getAttribute('href')).toEqual(mobileNavigationItems[i].route);
      expect(item.innerText).toEqual(mobileNavigationItems[i].title);
      expect(item.className).toEqual(mobileNavigationItems[i].type);
      expect(item.getAttribute('ng-reflect-router-link-active')).toEqual('is-active');
      i++;
    }
  });

  it(': should contain "navigation--tab-bar"', () => {
    el = fixture.debugElement.query(By.css('#navigation--tab-bar'));

    expect(el).not.toBe(undefined);
    expect(el).not.toBe(null);
  });

  it(': should contain valid navigation items"', () => {
    el = fixture.debugElement.query(By.css('#navigation--tab-bar-list'));
    const nativeEl = el.nativeElement;
    let i = 0;
    for (const item of nativeEl.children) {
      expect(item.getAttribute('title')).toEqual(NavigationConfig[i].title);
      expect(item.getAttribute('href')).toEqual(NavigationConfig[i].route);
      expect(item.getAttribute('ng-reflect-router-link-active')).toEqual('is-active');
      expect(item.className).toEqual(NavigationConfig[i].type);
      expect(item.children[0].className).toEqual(`fa fa-${NavigationConfig[i].icon}`);
      i++;
    }
  });
});
