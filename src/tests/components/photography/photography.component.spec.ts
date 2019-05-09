import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Title } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material';
import { PhotographyComponent } from '../../../app/components/photography/photography.component';
import { NavigationComponent } from '../../../app/components/navigation/navigation.component';
import { FooterComponent } from '../../../app/components/footer/footer.component';
import { DocumentRef } from '../../../app/services/documentRef.service';
import { ImageService } from '../../../app/services/image.service';
import { asyncData } from '../../test-helpers/async-observable-helpers';
const sinon = require('sinon');

describe('PhotographyComponent', () => {

  let comp: PhotographyComponent;
  let fixture: ComponentFixture<PhotographyComponent>;
  let el: DebugElement;
  let getImageGroupsSpy; // TODO: Not sure about this one....
  let getAllImageGroupsSpy;
  let imageServiceSpy: jasmine.SpyObj<ImageService>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('ImageService', ['getAllImageGroups']);
    getAllImageGroupsSpy = spy.getAllImageGroups.and.returnValue(asyncData('data'));

    TestBed.configureTestingModule({
      declarations: [
        PhotographyComponent,
        NavigationComponent,
        FooterComponent ],
      imports: [
        RouterTestingModule,
        MatGridListModule
      ],
      providers: [
        Title,
        DocumentRef,
        { provide: ImageService, useValue: spy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographyComponent);
    comp = fixture.componentInstance;
    getImageGroupsSpy = sinon.spy(comp, 'getImageGroups');
    imageServiceSpy = TestBed.get(ImageService);
    fixture.detectChanges();
  });

  it(': should create', () => {
    expect(comp).toBeDefined();
  });

  it(': should have the correct (meta) page title', () => {
    const pageTitle = TestBed.get(Title);
    expect(pageTitle.getTitle()).toBe('Photography - Brett Oberg');
  });

  it(': should have called "getImageGroups()"', () => {
    expect(getImageGroupsSpy.withArgs().callCount).toEqual(1);
  });

  it(': resize() should call "calculateGridCols()', () => {
    const spy = sinon.spy(comp, 'calculateGridCols');
    const event = { target: { innerWidth: 42 }};

    comp.resize(event);

    expect(spy.withArgs(event.target.innerWidth).callCount).toEqual(1);
  });

  it(': resize() should not call "calculateGridCols()', () => {
    const spy = sinon.spy(comp, 'calculateGridCols');
    const event = { };

    comp.resize(null);
    comp.resize(undefined);
    comp.resize(event);

    expect(spy.callCount).toEqual(0);
  });

  it(': getImageGroups() calls "ImageService.getAllImageGroups()"', fakeAsync(() => {
    // imageServiceSpy.getAllImageGroups.and.returnValue(asyncData([new ImageGroup()]));
    comp.getImageGroups();
    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    expect(imageServiceSpy.getAllImageGroups.calls.count()).toBe(1, 'one call');
  }));

  it(': getImageGroups(), request to "ImageService.getAllImageGroups()" is success', () => {
    expect(true).toBe(false);
  });

  it(': getImageGroups(), request to "ImageService.getAllImageGroups()" is error', () => {
    expect(true).toBe(false);
  });
});
