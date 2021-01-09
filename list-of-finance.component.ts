import { Component, OnInit } from '@angular/core';
import {IData} from './../../model/idata';
import {DataServiceService} from './../../services/data-service.service';

@Component({
  selector: 'app-list-of-finance',
  templateUrl: './list-of-finance.component.html',
  styleUrls: ['./list-of-finance.component.css']
})
export class ListOfFinanceComponent implements OnInit {
financelist:IData[];
  constructor(private dataservice:DataServiceService) {
    this.dataservice.getDataList().subscribe((data)=>{this.financelist=data;});
   }

  ngOnInit(): void {
  }

}
