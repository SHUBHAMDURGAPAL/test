import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { TweetsService } from '../shared/tweets.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  twitterHandle: any;
  tweetData: any[] = [];
  Highcharts = Highcharts;
  chartOptions: any;

  constructor(
    private tweetsService: TweetsService
  ) { }

  ngOnInit() {
    console.log('tweetData---5----5----', this.tweetData)
  }

  submit() {
    console.log('twitterHandle----', this.twitterHandle);
    this.tweetsService.getTweetsList(this.twitterHandle).subscribe((res) => {
      if (res['status'] == 200) {
        this.tweetData = res['body'].data;

        this.chartOptions = {
          chart: {
            type: 'column'
          },
          title: {
            text: 'Tweets Record'
          },
          subtitle: {
            text: ''
          },
          xAxis: {
            categories: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
            crosshair: true
          },
          yAxis: {
            min: 0,
            title: {
              text: 'No. of Tweets'
            }
          },
          plotOptions: {
            column: {
              pointPadding: 0.2,
              borderWidth: 0
            }
          },
          series: [{
            name: 'Tweet',
            data: [this.tweetData['records']]
          }]
        };
      }
    });
  }

}
