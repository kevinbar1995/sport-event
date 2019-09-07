import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {
  @Input() status: 'over' | 'current';

  classes: string;

  constructor(private element: ElementRef) {}

  ngOnInit() {
    if (this.status) {
      this.classes = 'badge-status--' + this.status;
    }

    this.element.nativeElement.classList.add(this.classes);
  }
}
