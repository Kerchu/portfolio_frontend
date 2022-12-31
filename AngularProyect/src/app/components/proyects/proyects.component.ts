import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';
@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent {
  proyectList:any;
  constructor(private dataPortfolio:PortfolioService){}
  ngOnInit(): void{
    this.dataPortfolio.obtainData().subscribe(data=>{
      this.proyectList=data.proyects;
    })
  }
}
