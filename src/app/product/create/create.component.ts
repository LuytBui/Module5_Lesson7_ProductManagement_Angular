import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product/product.service';
import {NotificationService} from '../../service/notification/notification.service';
import {CategoryService} from '../../service/category/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  categories: Category[];

  productForm = new FormGroup({
    model: new FormControl('', []),
    producer: new FormControl('', []),
    price: new FormControl('', []),
    description: new FormControl('', []),
    image: new FormControl('', []),
    category: new FormControl('', []),
  });

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private notificationService: NotificationService
  ) {
  }

  ngOnInit() {
    this.drawCategories();
  }

  drawCategories() {
    this.categoryService.getAll().subscribe(
      (response) => {
        this.categories = response as Category[];
      }
    );
  }

  createProduct() {
    let formData = new FormData();
    formData.append('producer', this.productForm.value.producer);
    formData.append('model', this.productForm.value.model);
    formData.append('price', this.productForm.value.price);

    const files = (document.getElementById('image') as HTMLInputElement).files;
    if (files.length > 0) {
      formData.append('image', files[0]);
    }

    formData.append('category', this.productForm.value.category);
    console.log(this.productForm.value.category);
    console.log(formData);
    this.productService.createProduct(formData).subscribe(
      () => {
        this.notificationService.showSuccessMessage('Thêm sản phẩm thành công');
      },
      (error) => {
        this.notificationService.showErrorMessage('Có lỗi xảy ra');
      }
    );
  }
}
