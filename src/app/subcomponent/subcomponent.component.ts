import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-subcomponent',
  templateUrl: './subcomponent.component.html',
  styleUrls: ['./subcomponent.component.scss'],
})
export class SubcomponentComponent {
  @Output() voted = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {}
}
