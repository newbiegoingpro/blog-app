import { Injectable } from '@angular/core';
import { Card } from '../components/card/card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  Cards: Card[] = [
    { id: 0, title: 'IndiaLongTIIIIIIIIIIIIIItleeeeeee', content: 'some content here' },
    { id: 1, title: 'Brazil', content: 'some content here' },
    { id: 2, title: 'Japan', content: 'some content here' },
    { id: 3, title: 'Italy', content: 'some content here' },
    { id: 4, title: 'Croatia', content: 'some content here' },
    { id: 5, title: 'Russia', content: 'some content here' },
    { id: 6, title: 'North Pole', content: 'some content here' },
    { id: 7, title: 'Denmark', content: 'some content here' },
    { id: 8, title: 'Puerto-Rico', content: 'some content here' },
    { id: 9, title: 'Tornado', content: 'some content here' }
  ];

  constructor() { }

  //массив всех записей
  getCards():Card[]{
    return this.Cards
  }

  //найти опр. запись
  getCard(id: number): Card {
    const card = this.Cards.find(c => c.id === id)!;
    console.log(card)
    return card;
  }
  //обновить запись
  updateCard(data:Card){
    const card = this.Cards.find(c => c.id === data.id)!;
    card.content = data.content;
    card.title = data.title;
    console.log(card)
  }
  //создать запись
  createCard(data: Card){
    console.log('эта карточка должна быть создана и отобразиться на главной странице: ', data)
    const arr = [data];
    //this.cards.unshift(data)   //unshift более вычислительно затратный, но хз как еще вставлять эл в начало
    //this.cards = arr.concat(this.cards) //как вариант
    this.Cards = [...arr, ...this.Cards]; //еще вариант
  }
  //удалить запись
  deleteCard(id: number){
    const cards = this.Cards.filter(c => c.id !== id);
    this.Cards = cards

  }
}
