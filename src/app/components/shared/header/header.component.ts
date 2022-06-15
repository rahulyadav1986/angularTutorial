import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  dropdown: boolean = false;

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  click_dropdown(){
    this.dropdown = !this.dropdown
  }

}
