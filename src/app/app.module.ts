import { YearsPipe } from './Home/Years.pipe';
import { NbElementPipe } from './Home/NbElement.pipe';
import { PaperService } from './app.service.ts.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routes } from './routing.routing';
import { HomeComponent } from './Home/Home.component';
import { DetailComponent } from './Detail/Detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    NbElementPipe,
    YearsPipe
  ],
  imports: [BrowserModule,
    HttpModule, FormsModule,
    RouterModule.forRoot(routes, {useHash: false})
  ],
  providers: [PaperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
