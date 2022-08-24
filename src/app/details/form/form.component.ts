import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { appConstant } from '../../app.constant';
import { CommonService } from '../../service/common.service';
import { ApiService } from '../../service/api.service';
import { Product } from '../../product/product';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  productForm: any;
  id: number | string = '';

  @Input() product: Product;
  @Output() submit: EventEmitter<boolean>=new EventEmitter(false);

  constructor(private commonService: CommonService,private apiService: ApiService) {}

  ngOnInit(): void {
    console.log(this.product);
    if (this.product) {
      this.initializeForm(this.product);
    }
  }

  get appConstant() {
    return appConstant;
  }

  initializeForm(product: any) {
    this.productForm = this.commonService.createproductForm(product);
  }
  onSubmit(formValue: any, isValid: boolean){
    // console.log(formValue)
    if (isValid){
     this.apiService.httpPut(`${appConstant.apiRoute.products}/${this.product?.id}`,formValue)
     .subscribe(data=> {
       this.submit.emit(true);
       this.commonService.sendProductMessage(true);
     },(err)=>{
      // console.log(err);
     });
    }
   }
}
