import { Component } from '@angular/core';

/**
*  This class represents the lazy loaded HomeComponent.
*/

@Component({
  selector: 'app-timeline-cmp',
  templateUrl: 'timeline.html',
  styleUrls: ['timeline.scss'],
})
export class TimelineComponent { }

@Component({
  selector: 'app-chat-cmp',
  templateUrl: 'chat.html'
})
export class ChatComponent { }

@Component({
  selector: 'app-notifications-cmp',
  templateUrl: 'notifications.html'
})
export class NotificationComponent { }

@Component({
  selector: 'app-home-cmp',
  templateUrl: 'home.component.html'
})

export class HomeComponent {
  /* Carousel Variable */
  myInterval = 5000;
  index = 0;
  slides: Array<any> = [];
  imgUrl: Array<any> = [
    `assets/img/slider1.jpg`,
    `assets/img/slider2.jpg`,
    `assets/img/slider3.jpg`,
    `assets/img/slider0.jpg`
  ];
  /* END */
  /* Alert component */
  public alerts = [
    {
      type: 'danger',
      msg: 'Oh snap! Change a few things up and try submitting again.'
    },
    {
      type: 'success',
      msg: 'Well done! You successfully read this important alert message.',
      closable: true
    }
  ];

  public closeAlert(i: number): void {
    this.alerts.splice(i, 1);
  }
  /* END*/

  constructor() {
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }

  /* Carousel */
  addSlide() {
    let i = this.slides.length;
    this.slides.push({
      image: this.imgUrl[i],
      text: `${['Dummy ', 'Dummy ', 'Dummy ', 'Dummy '][this.slides.length % 4]}
            ${['text 0', 'text 1', 'text 2', 'text 3'][this.slides.length % 4]}`
    });
  }
  /* END */
}
