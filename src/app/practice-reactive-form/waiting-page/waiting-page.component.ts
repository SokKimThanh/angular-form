import { UiService } from './waiting-page.service';
import { ifStmt } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-waiting-page',
  templateUrl: './waiting-page.component.html',
  styleUrls: ['./waiting-page.component.scss']
})
export class WaitingPageComponent implements OnInit {
  @ViewChild('loading') waitingDiv!: ElementRef;
  @Input() loading!: boolean;
  constructor(private ui: UiService) { }

  ngOnInit(): void {
    if (this.loading) {
      setTimeout(
        () => this.ui.show(), 2000
      )
    } else {
      setTimeout(
        () => this.ui.hide(), 3000
      )
    }
  }

}
