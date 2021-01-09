import { Component, OnInit } from '@angular/core';
import {IData} from './../../model/idata';
import {DataServiceService} from './../../services/data-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
productlist:IData[];
  constructor(private dataservice:DataServiceService) { 
    this.dataservice.getDataList().subscribe((data)=>{this.productlist=data;});
  }

  ngOnInit(): void {
  }

}
