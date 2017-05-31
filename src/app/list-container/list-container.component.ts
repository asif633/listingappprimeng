import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product.model';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent implements OnInit {

  constructor(private prodServ: ProductService) { }

  ngOnInit() {
    this.products = this.prodServ.getProducts();
  }
  
  products: Observable<Product[]>;


}
