import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../../service/common.service';
import { Product } from '../../product/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() product:Product;
  
showMessage :boolean=false;
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.initialization();
  }
  initialization(){
  this.commonService.getProductMessage().subscribe(data => {
    this.showMessage = data;
    setTimeout(()=>{
      this.showMessage=false;
    },5000)
  })
  }
}
