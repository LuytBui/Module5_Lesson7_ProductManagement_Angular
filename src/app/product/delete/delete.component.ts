import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {Category} from '../../model/category';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category/category.service';
import {ProductService} from '../../service/product/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {NotificationService} from '../../service/notification/notification.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  id: number;

  product: Product;

  categories: Category[] = [];

  productForm = new FormGroup({
    model: new FormControl('', []),
    producer: new FormControl('', []),
    price: new FormControl('', []),
    description: new FormControl('', []),
    image: new FormControl('', []),
    category: new FormControl('', []),
  });

  constructor(private categoryService: CategoryService,
              private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private notificationService: NotificationService
  ) {
  }

  ngOnInit() {
    this.drawProduct();
    this.drawCategories();
  }

  drawProduct() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const id = +params.get('id');
      this.id = id;
      this.productService.findById(id).subscribe(
        (response) => {
          this.product = response as Product;
        }
      );
    });
  }

  drawCategories() {
    this.categoryService.getAll().subscribe(
      (response) => {
        this.categories = response as Category[];
      }
    );
  }

  deleteProduct() {
    this.productService.deleteProduct(this.id).subscribe(
      () => {
        this.router.navigateByUrl('/products');
        this.notificationService.showSuccessMessage('Xóa thành công');
      },
      (error) => {
        this.notificationService.showErrorMessage('Có lỗi xảy ra');
      }
    );
  }


}
