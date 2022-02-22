import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { ResizeService } from './resize.service';
import { SCREEN_SIZE } from './screen-size.enum';
import { SizeDetector } from './size-detector.interface';

// size-detector.component.ts
@Component({
    selector: 'app-size-detector',
    templateUrl: './size-detector.component.html',
    styleUrls: ['./size-detector.component.scss']
})
export class SizeDetectorComponent implements AfterViewInit {
    prefix = 'is-';
    sizes: SizeDetector[] = [
        {
            id: SCREEN_SIZE.XS, name: 'xs', css: `d-block d-sm-none`
        },
        {
            id: SCREEN_SIZE.SM, name: 'sm', css: `d-none d-sm-block d-md-none`
        },
        {
            id: SCREEN_SIZE.MD, name: 'md', css: `d-none d-md-block d-lg-none`
        },
        {
            id: SCREEN_SIZE.LG, name: 'lg', css: `d-none d-lg-block d-xl-none`
        },
        {
            id: SCREEN_SIZE.XL, name: 'xl', css: `d-none d-xl-block`
        },
    ];
    @HostListener('window:resize', [])
    private onResize(): void {
        this.detectScreenSize();
    }

    ngAfterViewInit(): void {
        this.detectScreenSize();
    }


    constructor(private elementRef: ElementRef, private resizeSvc: ResizeService) { }
    private detectScreenSize(): void {
        const currentSize = this.sizes.find(x => {
            // get the HTML element
            const el = this.elementRef.nativeElement.querySelector(`.${this.prefix}${x.id}`);

            // check its display property value
            const isVisible = window.getComputedStyle(el).display !== 'none';

            return isVisible;
        });
        const unCurrentSize: SizeDetector = {
            id: SCREEN_SIZE.MD, name: 'md', css: `d-none d-md-block d-lg-none`
        };
        this.resizeSvc.onResize(currentSize ? currentSize : unCurrentSize);
    }

}
