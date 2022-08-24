import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { appConstant } from '../app.constant';
import { ApiService } from '../service/api.service';
import { environment } from '../environments/environment';
import { Product } from '../product/product';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl, FormGroup, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  product: any;
  id: number;
  showMessage :boolean=false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.getDetails((data as any).id);
    });
  }

  getDetails(id: number) {
    this.apiService
    .httpGet(`${appConstant.apiRoute.products}/${id}`)
    .subscribe((data) => {
      this.product = data;
      console.log(data);
    });
}
  productUpdate(event: boolean) {
    if (!(event as any).target) {
      this.showMessage = event;
    }
    setTimeout(() => {
      this.showMessage = false;
    }, 2000);
}

}