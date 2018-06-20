import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AllDataService } from './../../all-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  public oneC;
  constructor(private _route:ActivatedRoute, private router:Router, public api:AllDataService, public loaction:Location) { }

  ngOnInit() {
    let name = this._route.snapshot.paramMap.get("country");

    this.api.getCountry(name).subscribe(
      data=>{
        console.log(data);
        this.oneC=data;
      },
      error =>{
        console.log(error.errorMessage);
      }
    )
  }

  public goBack():any{
    this.loaction.back();
  }

}
