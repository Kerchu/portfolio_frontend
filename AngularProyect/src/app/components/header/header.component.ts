import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  myPortfolio:any;
  constructor(private dataPortfolio:PortfolioService){}
  ngOnInit(): void {
    this.dataPortfolio.obtainData().subscribe(data =>
      {
        this.myPortfolio=data;
      });
  }
}
