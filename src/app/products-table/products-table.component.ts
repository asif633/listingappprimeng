import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../shared/product.model';
import { Observable } from 'rxjs/Observable';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

  constructor(private prodServ: ProductService) { }

  ngOnInit() {
    this.products = this.prodServ.getProducts();
  }

  products: Observable<Product[]>;

  @Output() selectProduct = new EventEmitter<Product>();
  @Output() newProduct = new EventEmitter<boolean>();
  @Output() displayDialog = new EventEmitter<boolean>();
  
  onRowSelect(event) {
    this.newProduct.emit(false);
    this.selectProduct.emit(event.data);
    this.displayDialog.emit(true);
  }
  
  showDialogToAdd(){
    this.newProduct.emit(true);
    this.selectProduct.emit(this.prodServ.initializeNew());
    this.displayDialog.emit(true);
  }

}
