import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plagues',
  templateUrl: './plagues.page.html',
  styleUrls: ['./plagues.page.scss'],
})
export class PlaguesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  buscar(event) {
    console.log(event);
  }
}
