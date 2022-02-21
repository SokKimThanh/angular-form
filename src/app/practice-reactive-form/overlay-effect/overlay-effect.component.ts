import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay-effect',
  templateUrl: './overlay-effect.component.html',
  styleUrls: ['./overlay-effect.component.scss']
})
export class OverlayEffectComponent implements OnInit {
  isOpen = false;
  constructor() { }

  ngOnInit(): void {
  }

}
