import { AllDataService } from './../all-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public getRegion: any =["asia","africa","americas","europe","oceania"]
public reagion;

  constructor(private _route:ActivatedRoute, private router:Router, public api:AllDataService) { }

  ngOnInit() {
  }

}
