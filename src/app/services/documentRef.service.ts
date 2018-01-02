import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class DocumentRef {
  constructor(@Inject(DOCUMENT) private document: any) {}

   get bodyWidth() : any {
     return this.document.body.clientWidth;
   }
}