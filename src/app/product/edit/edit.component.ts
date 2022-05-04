import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category/category.service';
import {Product} from '../../model/product';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ProductService} from '../../service/product/product.service';
import {NotificationService} from '../../service/notification/notification.service';

declare var $: any;

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

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

  updateProduct() {
    const formData = new FormData();
    formData.append('producer', this.productForm.value.producer);
    formData.append('model', this.productForm.value.model);
    formData.append('price', this.productForm.value.price);
    formData.append('description', this.productForm.value.description);

    const files = (document.getElementById('image') as HTMLInputElement).files;
    if (files.length > 0) {
      formData.append('image', files[0]);
    }

    formData.append('category', this.productForm.value.category);
    this.productService.updateProduct(this.id, formData).subscribe(
      () => {
        this.notificationService.showSuccessMessage('Thêm sản phẩm thành công');
      },
      (error) => {
        this.notificationService.showErrorMessage('Có lỗi xảy ra');
      }
    );
  }
}
