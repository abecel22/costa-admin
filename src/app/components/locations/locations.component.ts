import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  lat: number = 29.760427;
  lng: number = -95.369803;
  lastSelectedInfoWindow: any;
  locations = [
    {
      name: 'Costa Financial- Main',
      lat: 29.74,
      lng: -95.4,
      street: '111 Main St.',
      city: 'Houston, TX 77008',
      phone: '(713)-777-7777'
    },
    {
      name: 'Costa Financial- North',
      lat: 29.94,
      lng: -95.42,
      street: '444 North St.',
      city: 'Houston, TX 77088',
      phone: '(713)-888-8888'
    },
    {
      name: 'Costa Financial- SW',
      lat: 29.64,
      lng: -95.62,
      street: '333 South West St.',
      city: 'Houston, TX 77656',
      phone: '(713)-444-7777'
    },
    {
      name: 'Costa Financial- West',
      lat: 29.74,
      lng: -95.82,
      street: '222 Pin Oak St.',
      city: 'Houston, TX 77494',
      phone: '(281)-555-5555'
    }
  ];

  constructor() {}

  ngOnInit() {}

  markerClick(infoWindow: any) {
    if (infoWindow === this.lastSelectedInfoWindow) {
      return;
    }
    if (this.lastSelectedInfoWindow != null) {
      try {
        this.lastSelectedInfoWindow.close();
      } catch {}
    }
    this.lastSelectedInfoWindow = infoWindow;
  }
}
