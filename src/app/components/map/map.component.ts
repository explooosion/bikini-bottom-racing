import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  public zoom: Number = 17;

  public lat: Number = 24.1505222;
  public lng: Number = 120.6855433;

  public origin: {} = { lat: 24.1505222, lng: 120.6855433 };
  public destination: {} = { lat: 24.1503016, lng: 120.6856202 };

  public waypoints: {} = [
    {
      location: { lat: 24.1524205, lng: 120.6863555 },
      stopover: false,
    },
    {
      location: { lat: 24.1517399, lng: 120.6883902 },
      stopover: false,
    },
    {
      location: { lat: 24.1497931, lng: 120.6867862 },
      stopover: false,
    },
    {
      location: { lat: 24.1495154, lng: 120.6851402 },
      stopover: false,
    }
  ];

  constructor() { }

  ngOnInit() { }

}
