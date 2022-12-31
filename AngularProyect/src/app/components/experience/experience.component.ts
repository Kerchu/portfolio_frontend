import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  educationList:any;
  constructor(private dataPortfolio:PortfolioService){}
  ngOnInit(): void{
    this.dataPortfolio.obtainData().subscribe(data=>{
      this.educationList=data.education;
    })
  }
}
