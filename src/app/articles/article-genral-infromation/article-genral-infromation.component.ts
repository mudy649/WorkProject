import { Component, OnInit,Input } from '@angular/core';
import { ArticleService } from 'src/app/Services/article.service';
import { home, dropdown } from 'src/app/JsonObject/artcile.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-article-genral-infromation',
  templateUrl: './article-genral-infromation.component.html',
  styleUrls: ['./article-genral-infromation.component.css']
})
export class ArticleGenralInfromationComponent implements OnInit {

  id:number;
  data:object = {};
  products:any [];
  exist = false;
  productObj:object = {};
  homeService 

  private headers = new Headers({ 'Content-Type': 'application/json'});
  
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient , private ArticleService: ArticleService ){}

  @Input() userInfo: any[];
  clickedUser:object = {};
  selectValue: string;
  
  
  articleUnit: dropdown[] = [
    {value:"day", name: "day"},
    {value:"mån", name: "Month"},
    {value:"St", name: "Styck"},
    {value:"Tim",name: "Timme"},
    {value:"helg",name:"Helg"},
    {value:"m",name:"Meter"},
    {value:"l",name:"Liter"},
    {value:"mm",name:"Milimeter"},
    {value:"week",name:"Vecka"},
    {value:"kvm",name:"Kvadrameter"}
  ] 

  
  
  articlegroup: dropdown[] = [
    {value:"10", name: "Bilift"},
    {value:"11", name: "Bmf(Lift med förare)"},
    {value:"12", name: "Koner"},
    {value:"13",name: "Körplåt"},
    {value:"14",name:"Helg"},
    {value:"15",name:"Pelarlift"},
    {value:"l6",name:"Plyfa"},
    {value:"17",name:"Rotella"},
    {value:"18",name:"Saxlift-Batteri"},
    {value:"19",name:"Seler"},
    {value:"20",name:"Släplift"},
    {value:"21", name: "Speciallift"},
    {value:"22", name: "Rullställning"},
    {value:"23", name: "Saxlift-Batteri(småsax)"},
    {value:"24",name: "Bomlift-Hybird"},
    {value:"25",name:"Bomlift-Diesel"},
    {value:"26",name:"Saxlift-Hybrid"},
    {value:"27",name:"Saxlift-Diesel"},
    {value:"30",name:"Drivmedel"},
    {value:"31",name:"Tjänster"},
    {value:"32",name:"Transport"},
    {value:"33",name:"Tvätt & Städ"},
    {value:"34",name:"Försäkrina"},
    {value:"35",name:"Del R-ställnina"},
    {value:"36",name:"Mellanhöid R-ställnina"},
    {value:"37",name:"Hänaställnina"},
    {value:"40",name:"Övriat"}
     
  ] 


  articleAcount: dropdown[] = [
    {value:"1", name: "Varor"},
    {value:"2", name: "Tiänster"},
    {value:"3",name: "Uthvrning"},
    {value:"4",name:"Försäkring"},
    {value:"5",name:"Bmf"},
    {value:"6",name:"Momsfria tiänster"},
  ]
  

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.homeService = this.ArticleService;
    this.homeService.getassets().subscribe(
      data=>{
        this.products = data ;
        console.log('product');
        console.log(this.products);
        
        for(var i=0 ; i<= this.products.length ; i++)
        { 
          if(parseInt(this.products[i].ID) === this.id)
          {
            console.log(parseInt(this.products[i].ID))
            this.clickedUser = this.products[i];
            console.log(this.clickedUser);
            break;
          }
        } 
        
    })
    
  }
 
 
  
  
}
