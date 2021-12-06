import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userInformation = [
    { name: "Muneer", age: 30 },
    { name: "Vineet", age: 20 },
    { name: "Deepak", age: 16 },
    { name: "Rakesh", age: 12 },
    { name: "Anish", age: 35 },

  ];

  toggle: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleValue() {
    this.toggle = !this.toggle;
  }
}
