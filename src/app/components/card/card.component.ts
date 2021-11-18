import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from './card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card!: Card;
  strFromChildComponent:string = '';

  constructor( public router: Router) {


   }

  ngOnInit(): void {
  }


}
