import { Component, OnInit } from '@angular/core';
import {IData} from './../../model/idata';
import {DataServiceService} from './../../services/data-service.service';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent implements OnInit {
cardlist:IData[];
  constructor(private dataservice:DataServiceService) { 
    this.dataservice.getDataList().subscribe((data)=>{this.cardlist=data;});
  }

  ngOnInit(): void {
  }

}
