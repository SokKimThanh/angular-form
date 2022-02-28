import { OverlayEffectTablePaginator, OverlayEffectTableInput } from '../overlay-effect/overlay-effect-table-config.interface';
import { OverlayEffectTablesService } from './overlay-effect-table.service';
import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable, catchError, of, finalize } from "rxjs";
import { OverlayEffectTable } from './overlay-effect-table';

export class OverlayEffectTablesDataSource implements DataSource<OverlayEffectTable> {

    private OverlayEffectTablesSubject = new BehaviorSubject<OverlayEffectTable[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private coursesService: OverlayEffectTablesService) { }

    connect(collectionViewer: CollectionViewer): Observable<OverlayEffectTable[]> {
        return this.OverlayEffectTablesSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.OverlayEffectTablesSubject.complete();
        this.loadingSubject.complete();
    }

    loadOverlayEffectTables(showInput: OverlayEffectTableInput, showPaginator: OverlayEffectTablePaginator) {

        this.loadingSubject.next(true);

        this.coursesService.findOverlayEffectTables(showPaginator.sortDirection,
            showPaginator.pageIndex, showPaginator.pageSize).pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe((OverlayEffectTables: any[]) => this.OverlayEffectTablesSubject.next(OverlayEffectTables));
    }
}