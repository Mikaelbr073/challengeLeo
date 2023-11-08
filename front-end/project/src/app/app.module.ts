import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { NavybarComponent } from './navybar/navybar.component';
import { NotasDetailComponent } from './notas-detail/notas-detail.component';
@NgModule({
  declarations: [	
    AppComponent,
      NavybarComponent,
      NotasDetailComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
    MenubarModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
