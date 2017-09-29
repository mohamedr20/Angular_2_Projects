import { Component } from '@angular/core';
import {Article} from './article/article'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){
    this.articles = [
      new Article('Angular 2','http://angular.io',20),
      new Article('Angular 2','http://angular.io',20),
      new Article('Angular 2','http://angular.io',20)
    ]
  }
  title = 'app';
  articles:Article[]

  addArticle(title:HTMLInputElement,link:HTMLInputElement):boolean{
    this.articles.push(new Article(title.value,link.value,0))
    title.value="";
    link.value ="";
    console.log(`Adding article title: ${title.value} and link ${title.value}`);
    return false;
  }

  sortedArticles():Article[]{
    return this.articles.sort((a:Article,b:Article)=>b.votes-a.votes);
  }

}
