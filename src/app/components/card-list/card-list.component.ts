import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../services/cards.service';
import { Card } from '../card/card';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],

})
export class CardListComponent implements OnInit {
  cards: Card[] = []; //не знаю, обязательно ли указывать тут строго как тип интерфейс Card, тк он уже указан в Cards

  constructor(
    private cardsService: CardsService,
    public router: Router
  ) {

  }

  ngOnInit(): void {
    this.cards = this.cardsService.getCards()
  }

  addCard(card: Card){
    console.log(card)
  }
}
