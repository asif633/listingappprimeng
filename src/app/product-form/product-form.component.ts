import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../shared/product.model';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, OnChanges {

  constructor(private prodServ: ProductService) { }

  ngOnInit() {
  }

  @Input() product: Product;
  @Input() addProduct: boolean;
  @Input() dialogDisp: boolean;
  dialog: boolean;


  hideDialog(event) {
    this.dialog = false;
  }

  ngOnChanges() {
    this.dialog = this.dialogDisp;
  }

  save() {
    let fle: File;
    for (let selectedFile of [(<HTMLInputElement>document.getElementById('file')).files[0]]) {
      fle = selectedFile;
    };
    this.prodServ.addProduct(this.product, fle);
    this.dialog = false;
  }

  delete() {
    this.prodServ.deleteProduct(this.product);
    this.dialog = false;
  }

  update() {
    let fle: File;
    for (let selectedFile of [(<HTMLInputElement>document.getElementById('file')).files[0]]) {
      fle = selectedFile;
    };
    this.prodServ.updateProduct(this.product, fle);
    this.dialog = false;
  }

}
