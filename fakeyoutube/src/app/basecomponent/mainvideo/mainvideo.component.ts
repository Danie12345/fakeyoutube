import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mainvideo',
  templateUrl: './mainvideo.component.html',
  styleUrls: ['./mainvideo.component.css']
})
export class MainvideoComponent implements OnInit {

  
  public publishername = "Grian";
  public subscribers = "7.54M";
  public views = 2320128;
  public date = "March 10, 2022";
  public likes = "148K";
  public hashtags = [
    "minecraft", "hermitcraft"
  ];
  public videotitle = "Hermitcraft 9: Episode 2 - FINDING DIAMONDS!";

  constructor() { }

  ngOnInit(): void {
  }

}
