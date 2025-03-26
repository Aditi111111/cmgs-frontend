import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides = [
    { image: 'assets/img/slide1.jpg', title: 'Welcome To CMGS', description: 'One stop solution to all your grievances' },
    { image: 'assets/img/slide2.jpg', title: 'Complaints?', description: 'Helping you register complaints seamlessly' },
    { image: 'assets/img/slide3.jpg', title: 'Got Suggestions?', description: 'We are always here to assist you!' }
  ];

  currentIndex = 0;
  slideInterval: any;

  constructor() {}

  ngOnInit(): void {
    this.startSlideShow();
  }

  startSlideShow(): void {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 2000); // Change slide every 3 seconds
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  pauseSlide(): void {
    clearInterval(this.slideInterval);
  }

  resumeSlide(): void {
    this.startSlideShow();
  }
}
