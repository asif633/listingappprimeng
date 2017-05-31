import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-products-manage',
  templateUrl: './products-manage.component.html',
  styleUrls: ['./products-manage.component.css']
})
export class ProductsManageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedProduct: Product;

  getSelectedProduct(event){
    this.selectedProduct = event;
  }

  addBool: boolean;

  addOrUpdate(event){
    this.addBool = event;
  }
  
  dialogDisplay: boolean;

  dialogShow(event){
    this.dialogDisplay = event;
  }

}
