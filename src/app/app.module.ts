import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsComponent } from './forms/forms.component';
import { TablesComponent } from './tables/tables.component';
import { PagesComponent } from './pages/pages.component';
import { CardsComponent } from './cards/cards.component';
import { GraphComponent } from './graph/graph.component';
import { PiechartComponent } from './piechart/piechart.component';
import {MatCardModule} from '@angular/material/card';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SidebarComponent,
    FormsComponent,
    TablesComponent,
    PagesComponent,
    CardsComponent,
    GraphComponent,
    PiechartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    HighchartsChartModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
