import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProcessService} from './process.service'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DetailComponent } from './detail/detail.component';
import { ApplyComponent } from './apply/apply.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailComponent,
    ApplyComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers : [ProcessService],  
  bootstrap: [AppComponent]
})
export class AppModule { }
