import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'app';
  constructor(private spinnerService: Ng4LoadingSpinnerService) { }
  ngOnInit(){
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 2000);

}
}
