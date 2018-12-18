import { Component, OnInit } from '@angular/core';
import { PusherService } from '../pusher.service';

interface Message {
  text: string;
  user: string;
}

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: Array<Message>;

  constructor(private pusherService: PusherService) {
    this.messages = [];
  }

  ngOnInit() {
    this.pusherService.messagesChannel.bind('client-new-message', message => {
      this.messages.push(message);
    });
  }

  sendMessage(user: string, text: string) {
    const message: Message = {
      user: user,
      text: text
    };
    this.pusherService.messagesChannel.trigger('client-new-message', message);
    this.messages.push(message);
  }
}
