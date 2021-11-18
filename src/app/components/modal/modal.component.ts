import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CardsService } from 'src/app/services/cards.service';
import { Card } from '../card/card';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  title!: string;
  content!: string;
  id!: number;
  constructor(private location: Location, private cardsService: CardsService) { }

  ngOnInit(): void {

  }
  goBack(){
    this.location.back();
  }
  onSubmit(){
    if(!this.content || ! this.title){
      alert('Заполните все поля');
      return
    };
    const cards = this.cardsService.getCards()
    const newCard:Card = {title: this.title, content: this.content, id: cards.length}
    this.cardsService.createCard(newCard)
    console.log('123', {title: this.title, content: this.content, id: cards.length})
    this.location.back();
  }
}
