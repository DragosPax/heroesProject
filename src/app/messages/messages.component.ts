import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
 @Input() name:string=""

 @Output() notify:EventEmitter<string>=new EventEmitter<string>()
   val:string="GATA!"


  constructor(public messageService:MessageService) { }

  ngOnInit(): void {
  }
  trimite(){
    this.notify.emit(this.val)
  }

}
