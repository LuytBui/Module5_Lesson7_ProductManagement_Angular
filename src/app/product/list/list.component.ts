import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product/product.service';

declare var $: any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getAll().subscribe((response) => {
      this.products = response as Product[];
    }, error => {
      console.log(error);
    });
  }

}
