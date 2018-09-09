import { Component, OnInit } from '@angular/core';

import { Message } from '@app/models';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quote: string;
  isLoading: boolean;
  public message: Message;
  public messages: Message[];

  constructor() {

    this.message = new Message('', 'assets/images/user.png');
    this.messages = [
      new Message('Welcome to Ask HR chatbot', 'assets/images/bot.png', new Date())
    ];

  }

  ngOnInit() {
  }
}
