import { AllDataService } from './../../all-data.service';
import { FilterPipe } from './../../filter.pipe';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Location} from '@angular/common';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
  providers: [Location, FilterPipe]
})
export class AllComponent implements OnInit {
 
  p: number = 1;
  public name:string;
  public regions;
  public language;
  public currency;
  public region:string;
  public getCurrency:Subscription;
  public cfilter:boolean=false;
  public lFilter:boolean =false;
  constructor(private _route:ActivatedRoute,private router:Router, private spinnerService: Ng4LoadingSpinnerService,public api:AllDataService, public location:Location) { }

  ngOnInit() {
    console.log("All is called")
    let region=this._route.snapshot.paramMap.get("region");
   console.log(region)
    this.getCurrency= this._route.queryParams
    .subscribe(
      params=>{
        
        if(params["currency"]){
          this.cfilter=true
          this.filterC(params["currency"])
          this.name=params["name"]
          console.log(name)
        }

        else if(params["language"])
        {
          this.lFilter=true
          this.filterL(params["language"])
          this.name=params["name"]
      }

      else{
        this.cfilter=false
        this.region=this._route.snapshot.paramMap.get("region")
        this.name=this.region

        if(this.region){
          this.api.allregions(region)
          .subscribe(
            data=>{
              this.regions=data;
              console.log(this.regions)
            },
            error=>{
              console.log(error.errorMessage);
            }
          )
        }
      }
    }
    );
  }

  public search=''

  filterC(currency){
    this.api.currency(currency)
    .subscribe(
      data =>{
        this.regions=data
      }
    )
  }

  filterL(language){
    this.api.language(language)
    .subscribe(
      data =>{
        this.regions= data
      }
    )
  }
  public checkValue = (value: any): boolean => {
    if (value.length != 0 && value[0] !== "") {
      return true;
    }
    else {
      return false;
    }

  }

  public goBack(): any{
    this.location.back();
  }

}
