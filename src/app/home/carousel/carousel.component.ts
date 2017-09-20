import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  array = [''];
  constructor() { }

  ngOnInit() {
    setTimeout(_ => {
      this.array = [
        '/assets/images/banner/banner1.jpg', '/assets/images/banner/banner2.jpg',
        '/assets/images/banner/banner3.jpg'];
    }, 500);
  }

}
