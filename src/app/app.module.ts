import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { AppRoutingModule , routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms'
import { SidebarModule } from 'ng-sidebar';
import {MatIconModule} from '@angular/material/icon';
import { ArticlesComponent } from './articles/articles.component';
import { OverviewComponent } from './overview/overview.component';
import { ProjectComponent } from './project/project.component';
import { TransportComponent } from './transport/transport.component';
import { OrderComponent } from './order/order.component';
import { CustomerComponent } from './customer/customer.component';
import { ArticleGenralInfromationComponent } from './articles/article-genral-infromation/article-genral-infromation.component';
import { ArticleDetailsComponent } from './articles/article-details/article-details.component';
import { ArticleService } from './Services/article.service';
import { HttpClientModule } from '@angular/common/http';
import { ArticleSearchComponent } from './articles/article-search/article-search.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
   
    ArticleDetailsComponent,
    ArticleSearchComponent,
    ArticleGenralInfromationComponent
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    FormsModule,
    MatListModule,
    SidebarModule.forRoot(),
    MatIconModule,
    MatTabsModule,
    HttpClientModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    FormsModule,
    MatListModule,
    MatIconModule,
    MatTabsModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
