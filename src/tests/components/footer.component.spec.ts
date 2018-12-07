import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterComponent } from '../../app/components/footer/footer.component';
import { UserConfig } from '../../app/config/user.config';

describe('FooterComponent', () => {

  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(': should create', () => {
    expect(component).toBeDefined();
  });

  it(': should initialize member variables', () => {
    expect(component.email).toBe(UserConfig.about.email);
    expect(JSON.stringify(component.social)).toBe(JSON.stringify(UserConfig.social));
  });

  it(': should contain #footer', () => {
    el = fixture.debugElement.query(By.css('#footer'));
    expect(el).not.toBe(undefined);
    expect(el).not.toBe(null);
  });

  it(': should contain #footer--items-left', () => {
    el = fixture.debugElement.query(By.css('#footer--items-left'));
    expect(el).not.toBe(undefined);
    expect(el).not.toBe(null);
  });

  it(': #footer--social should contain valid social items', () => {
    el = fixture.debugElement.query(By.css('#footer--items-right'));
    const nativeEl = el.nativeElement;
    let i = 0;
    for (const item of nativeEl.children) {
      if (item.firstElementChild.id.includes('social')) {
        expect(item.firstElementChild.href).toBe(UserConfig.social[i].url);
        expect(item.firstElementChild.id).toBe(`footer--social-${UserConfig.social[i].title}`);
        expect(item.firstElementChild.title).toBe(UserConfig.social[i].title);
        expect(item.firstElementChild.firstElementChild.className).toBe(`fa ${UserConfig.social[i].fa_icon}`);
      }
      i++;
    }
  });

  it(': #footer--copyright-information should contain valid text', () => {
    el = fixture.debugElement.query(By.css('#footer--copyright-information'));
    const text =  el.nativeElement.innerText;
    expect(text).toBe(`| ${new Date().getFullYear()}`);
  });
});
