import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { OrderComponent } from './order/order.component';
import { OverviewComponent } from './overview/overview.component';
import { ProjectComponent } from './project/project.component';
import { TransportComponent } from './transport/transport.component';
import { CustomerComponent } from './customer/customer.component';
import { ArticleGenralInfromationComponent } from './articles/article-genral-infromation/article-genral-infromation.component';


const routes: Routes = [
  { path: 'articles', component: ArticlesComponent },
  { path: 'order', component: OrderComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'transport', component: TransportComponent },
  { path: 'customer', component: CustomerComponent  },
  { path: 'articlegenralinformation/:id' , component: ArticleGenralInfromationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ArticlesComponent,OrderComponent,OverviewComponent,ProjectComponent,TransportComponent,CustomerComponent,ArticleGenralInfromationComponent]
