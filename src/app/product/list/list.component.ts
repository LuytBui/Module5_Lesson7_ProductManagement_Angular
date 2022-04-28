import {Component, OnInit} from '@angular/core';
import {IProduct} from '../../iproduct';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: IProduct[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getAll().subscribe((response) => {
      this.products = response as IProduct[];
    }, error => {
      console.log('error!');
    });
  }

}
