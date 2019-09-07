import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  previousIcon = faArrowLeft;
  searchIcon = faSearch;
  showPreviousIcon = true;
  showSearchIcon = true;

  constructor() {}

  ngOnInit() {}
}
