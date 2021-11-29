import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../services/cards.service';
import { Card } from '../card/card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],

})
export class CardListComponent implements OnInit {
  cards: Card[] = [];

  constructor(
    private cardsService: CardsService,
  ) {

  }

  ngOnInit(): void {
    this.cards = this.cardsService.getCards()
  }

  addCard(card: Card){
    console.log(card)
  }
}
