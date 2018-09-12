import { Component, OnInit } from '@angular/core';

import { Message } from '@app/models';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoading: boolean;
  public message: Message;
  public messages: Message[];

  constructor() {

    this.message = new Message('', 'fas fa-user-circle text-info');
    this.messages = [
      new Message('Welcome to AskHR chatbot', 'fas fa-robot text-success', new Date())
    ];

  }

  ngOnInit() {
  }
}
