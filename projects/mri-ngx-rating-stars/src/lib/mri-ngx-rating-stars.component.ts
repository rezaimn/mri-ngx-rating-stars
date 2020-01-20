import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'mri-ngx-rating-stars',
  templateUrl: './mri-ngx-rating-stars.component.html',
  styleUrls: ['./mri-ngx-rating-stars.component.css']
})
export class MriNgxRatingStarsComponent implements OnInit {

  @Input() activeColor = '#ffbb44';
  @Input() rate = 0;
  @Input() fontSize = '';
  @Input() disabled = false;
  @Output() rateSet = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  setRate(rate) {
    this.rate = rate;
    this.rateSet.emit(rate);
  }

}
