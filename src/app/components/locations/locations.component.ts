import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  lat: number = 29.760427;
  lng: number = -95.369803;

  constructor() {}

  ngOnInit() {}
}
