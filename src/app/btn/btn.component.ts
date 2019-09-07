import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {
  constructor(private element: ElementRef) {}
  @Input() color: 'primary' | 'neutral' = 'neutral';
  @Input() sizing: 'full-width' | 'fit-content' = 'fit-content';

  faSpinner = faSpinner;
  isSubmitting = false;
  classes: string[] = [];

  ngOnInit() {
    if (this.color) {
      this.classes = this.classes.concat('btn-color--' + this.color);
    }

    if (this.sizing) {
      this.classes = this.classes.concat('btn-sizing--' + this.sizing);
    }

    this.element.nativeElement.classList.add(...this.classes);
  }
}
