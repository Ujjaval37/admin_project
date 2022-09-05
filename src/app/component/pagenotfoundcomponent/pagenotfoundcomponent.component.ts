import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfoundcomponent',
  templateUrl: './pagenotfoundcomponent.component.html',
  styleUrls: ['./pagenotfoundcomponent.component.scss']
})
export class PagenotfoundcomponentComponent implements OnInit {
  imageSrc = 'assets/Image/image_pagenotfound.png';


  constructor() { }

  ngOnInit(): void {
  }

}
