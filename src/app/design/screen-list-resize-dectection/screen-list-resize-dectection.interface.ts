import { SCREEN_SIZE } from './screen-size.enum';
import { SizeDetector } from './size-detector.interface';

export interface ResizeDetection {
    sizeEnumer: SCREEN_SIZE;
    sizeDetector: SizeDetector;
}
