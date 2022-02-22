// hello.component.ts

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ResizeService } from './resize.service';
import { ResizeDetection } from './screen-list-resize-dectection.interface';
import { SCREEN_SIZE } from './screen-size.enum';
import { SizeDetector } from './size-detector.interface';

@Component({
    selector: 'app-screen-list-resize-dectection',
    templateUrl: './screen-list-resize-dectection.component.html',
    styleUrls: ['./screen-list-resize-dectection.component.scss']
})
export class ScreenListResizeDectectionComponent {

    sizeID!: SCREEN_SIZE;
    sizeDetector!: SizeDetector;
    @Output() resizeDetectionEventEmitter = new EventEmitter<ResizeDetection>();
    constructor(private resizeService: ResizeService) {
        // subscribe to the size change stream
        this.resizeService.onResize$.subscribe(sizeDetector => {
            this.sizeID = sizeDetector.id;
            this.resizeDetectionEventEmitter.emit({ sizeEnumer: sizeDetector.id, sizeDetector: this.sizeDetector });
        });
    }
}
