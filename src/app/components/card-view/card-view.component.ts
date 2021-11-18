import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Card } from '../card/card';
import { ActivatedRoute, Router } from '@angular/router';
import { CardsService } from 'src/app/services/cards.service';
import { ConnectableObservable } from 'rxjs';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {
  title!: string;
  content!: string;
  id!: number;
  card: Card|undefined; // |undefined && ! эквивалентны при заявлении типа переменной?
  isOpen: boolean = false;
  constructor(private location: Location, private cardsService: CardsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCard()
    console.log(this.activatedRoute)
  };

  getCard(){
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.card = this.cardsService.getCard(id);
    this.title = this.card.title;
    this.content = this.card.content;
    this.id = this.card.id;
  }

  onSubmit(){
   if(!this.content || ! this.title){
     alert('Заполните все поля');
     return
   };
   const newCard:Card = {
     title: this.title,
     content: this.content,
     id: this.id
   };
   this.cardsService.updateCard(newCard)

   console.log(newCard);
   this.goBack();
  };

  onDeleteCard(){
    console.log(123)
    this.cardsService.deleteCard(this.id)
    this.goBack()
  }

  goBack(): void {
    this.location.back();
  };

  togglePopup(){
    this.isOpen = !this.isOpen
    console.log(this.isOpen)
  }
}


