import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { HistoryComponent } from './component/history/history.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveformsComponent } from './component/reactiveforms/reactiveforms.component';
import { HomeComponent } from './component/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { MydishesComponent } from './component/mydishes/mydishes.component';
import { FavdishesComponent } from './component/favdishes/favdishes.component';
import { AdddishesComponent } from './component/adddishes/adddishes.component';
import { SearchbarComponent } from './component/searchbar/searchbar.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HistoryComponent,
    ReactiveformsComponent,
    HomeComponent,
    MydishesComponent,
    FavdishesComponent,
    AdddishesComponent,
    SearchbarComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
