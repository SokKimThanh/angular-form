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
        return of(this.getOverlayEffectTable)
    }
}