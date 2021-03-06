import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { PusherService } from './pusher.service';

@NgModule({
  declarations: [AppComponent, MessagesComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [PusherService],
  bootstrap: [AppComponent]
})
export class AppModule {}
