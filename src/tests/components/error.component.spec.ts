// Angular stuff
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Title } from '@angular/platform-browser';

// Component being tested
import { ErrorComponent } from '../../app/components/error/error.component';
import { NavigationComponent } from '../../app/components/navigation/navigation.component';
import { FooterComponent } from '../../app/components/footer/footer.component';
import { DocumentRef } from '../../app/services/documentRef.service';

describe('ErrorComponent', () => {

  let comp: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ErrorComponent,
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
    fixture = TestBed.createComponent(ErrorComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(': should create', () => {
    expect(comp).toBeDefined();
  });

  it(': should have the correct (meta) page title', () => {
    const pageTitle = TestBed.get(Title);
    expect(pageTitle.getTitle()).toBe('Error');
  });

  it(': should contain #error--title', () => {
    el = fixture.debugElement.query(By.css('#error--title'));
    expect(el).not.toBe(undefined);
    expect(el).not.toBe(null);
  });

  it(': #error--title should contain valid text', () => {
    el = fixture.debugElement.query(By.css('#error--title'));
    const text =  el.nativeElement.innerText;
    expect(text).toBe('An unknown error has occured.');
  });

  it(': should contain #error--content', () => {
    el = fixture.debugElement.query(By.css('#error--content'));
    expect(el).not.toBe(undefined);
    expect(el).not.toBe(null);
  });

  it(':#error--content should contain valid text', () => {
    el = fixture.debugElement.query(By.css('#error--content'));
    let actualText =  el.nativeElement.innerText;
    actualText = actualText.replace(/(\r\n|\n|\r|\s)/gm, ''); // Remove all line breaks and spaces;
    let expectedText = `Sorry for the inconvenience, here are some potential solutions: Reload the browser Open the application in Google Chrome If all solutions fail, please log your error here.`;
    expectedText = expectedText.replace(/(\r\n|\n|\r|\s)/gm, '');
    expect(expectedText).toBe(expectedText);
  });
});
