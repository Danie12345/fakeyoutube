import { Component, OnInit } from '@angular/core';
import { Othervideos } from './othervideos';

@Component({
  selector: 'app-othervideos',
  templateUrl: './othervideos.component.html',
  styleUrls: ['./othervideos.component.css']
})
export class OthervideosComponent implements OnInit {

  public filters = [
    "All",
    "Minecraft",
    "Related",
    "Live",
    "Recently Uploaded",
    "Watched"
  ];
  public videos = new Othervideos().othervideos;

  constructor() { }

  ngOnInit(): void {
  }

}
