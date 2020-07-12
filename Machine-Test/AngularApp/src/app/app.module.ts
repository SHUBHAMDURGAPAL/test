import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TweetsComponent } from './tweets/tweets.component';
import { HighchartsChartComponent } from 'highcharts-angular';
import { TweetsService } from './shared/tweets.service';

@NgModule({
  declarations: [
    AppComponent,
    TweetsComponent,
    HighchartsChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TweetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
