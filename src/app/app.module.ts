import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { AddCardComponent } from './components/addcard/addcard.component';
import { CardViewComponent } from './components/card-view/card-view.component';
import { MainComponent } from './components/main/main.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'card/:id',
    component: CardViewComponent
  },
  {
    path: 'newPost',
    component: AddCardComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardListComponent,
    AddCardComponent,
    CardViewComponent,
    MainComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, /*{enableTracing: true}*/)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
