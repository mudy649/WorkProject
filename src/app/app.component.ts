import { Component , ViewChild,OnInit} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ArticleService } from './Services/article.service';
import { home } from 'src/app/JsonObject/artcile.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ArticleService],
})

export class AppComponent {
  
  
  data: any;
  homeService: ArticleService;
  home = new home();
  homearray= [];
  public title= "submit";
  activeIndex = -1;
  master = 'this is app comp';


  public articles =[];
  constructor(private ArticleService: ArticleService){}

  ngOnInit(){
    
  
  }


  getdata()
  { this.homeService = this.ArticleService;
    this.homeService.getdata().subscribe(
      data=>{
        this.homearray = data ;
        console.log(data);
        console.log('2');
    })


    
  
  }
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;


  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
 
}
