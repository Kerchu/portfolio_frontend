import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  myPortfolio:any;
  constructor(private dataPortfolio:PortfolioService){}
  ngOnInit(): void {
    this.dataPortfolio.obtainData().subscribe(data =>
      {
        this.myPortfolio=data;
      });
  }
}
