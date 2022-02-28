import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { OVERLAYEFFECTTABLE, OverlayEffectTable } from "./overlay-effect-table";

@Injectable({
    providedIn: 'root'
})
export class OverlayEffectTablesService {
    overlayEffectTable!: OverlayEffectTable[];
    get getOverlayEffectTable(): OverlayEffectTable[] {
        this.overlayEffectTable = OVERLAYEFFECTTABLE;
        return this.overlayEffectTable;
    }
    constructor() {

    }
    findOverlayEffectTables(sortOrder = 'asc', pageNumber = 0, pageSize = 3): Observable<OverlayEffectTable[]> {
        return of(this.getDataExample())
    }
    getDataExample(): OverlayEffectTable[] {
        const result: OverlayEffectTable[] = [];
        for (let i = 0; i <= 10000; i++) {
            result.push({ id: i, name: "option " + i, colour: i * 2 / 0.5 + '', pet: i + " adress" })
        }
        this.overlayEffectTable = result;
        return this.overlayEffectTable;
    }
}