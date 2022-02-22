import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { GIOI_TINH } from './GIOI_TINH';

export interface GIOITINH {
    FEMALE: string;
    MALE: string;
    NANONEICON: string;
    NAICON: string;
}
export const gioitinh: GIOITINH = {
    FEMALE: 'gioi-tinh-female',
    MALE: 'gioi-tinh-male',
    NAICON: 'gioi-tinh-na',
    NANONEICON: '',
};

export const VALUESGIOITINH = {
    1: gioitinh.MALE, 2: gioitinh.FEMALE, 3: gioitinh.NANONEICON,
};
export const VALUESGIOITINHTEXT = {
    // tslint:disable-next-line:object-literal-key-quotes
    'Nam': gioitinh.MALE, 'Nữ': gioitinh.FEMALE, 'N/A': gioitinh.NANONEICON,
};
@Injectable({
    providedIn: 'root'
})
export class GIOITINH {
    static ConvertToGioiTinh(data: GIOI_TINH[]): object {
        return from(data).pipe(map(dat => ({ ...dat, GIOI_TINH: dat.TEN_GIOI_TINH === 'Nam' ? 1 : dat.TEN_GIOI_TINH === 'Nữ' ? 2 : 3 })));
    }
};