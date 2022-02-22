// resize.service.ts

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { SizeDetector } from './size-detector.interface';

@Injectable({
    providedIn: 'root'
})
export class ResizeService {

    get onResize$(): Observable<SizeDetector> {
        return this.resizeSubject.asObservable().pipe(distinctUntilChanged());
    }

    private resizeSubject: Subject<SizeDetector>;

    constructor() {
        this.resizeSubject = new Subject();
    }

    onResize(sizeDetector: SizeDetector): void {
        this.resizeSubject.next(sizeDetector);
    }

}
