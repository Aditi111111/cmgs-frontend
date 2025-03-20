import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  slides: string[] = [
    'assets/img/slide1.png',
    'assets/img/slide2.png',
    'assets/img/slide3.jpg'
  ];
  currentIndex: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.startSlideshow();
  }

  startSlideshow(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }, 3000); // Change slide every 3 seconds
  }
}
