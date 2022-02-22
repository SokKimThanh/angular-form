import { SCREEN_SIZE } from './screen-size.enum';

export interface SizeDetector {
    id: SCREEN_SIZE;
    name: string;
    css: string;
}
