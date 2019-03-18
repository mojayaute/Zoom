import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from  '@angular/forms';
import { AppComponent } from './app.component';
import { MzSelectModule } from 'ngx-materialize';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MzSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
