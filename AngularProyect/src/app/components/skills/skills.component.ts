import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  myPortfolio:any;
  constructor(private dataPortfolio:PortfolioService){}
  ngOnInit(): void {
    this.dataPortfolio.obtainData().subscribe(data =>
      {
        this.myPortfolio=data;
      });
  }
}
