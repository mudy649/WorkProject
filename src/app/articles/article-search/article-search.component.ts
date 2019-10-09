import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/Services/article.service';
import { home, articlebasic } from 'src/app/JsonObject/artcile.model';

@Component({
  selector: 'app-article-search',
  templateUrl: './article-search.component.html',
  styleUrls: ['./article-search.component.css'],
  providers:[ArticleService],
})
export class ArticleSearchComponent implements OnInit {
  
  userInformation: any;
  isVisible : boolean = true;
  clickedUser: any;
  data: any;
  homeService: ArticleService;
  
  // get data from model and store in article array
  articlebasic = new articlebasic()
  articlearray=[];
  articleService: ArticleService;
  
  home = new home();
  homearray= [];
  public title= "submit";
  activeIndex = -1;
  master = 'this is app comp';

  constructor(private ArticleService: ArticleService){}

  ngOnInit() {
    this.getassests()
  
  }


  getdata()
  { this.homeService = this.ArticleService;
    this.homeService.getdata().subscribe(
      data=>{
        this.homearray = data ;
        console.log(data);
        console.log('search');
    })
  }


  getassests()
  { this.articleService = this.ArticleService;
    this.articleService.getassets().subscribe(
      data=>{
        this.articlearray = data ;
        console.log(data);
        console.log('assets');
    })

  }

  update(obj,index){
    this.isVisible = false;
    this.clickedUser = obj;
    console.log(obj)
  }

}
