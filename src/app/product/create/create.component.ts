import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {NotificationService} from '../../service/notification/notification.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  productForm = new FormGroup({
    model: new FormControl('', []),
    producer: new FormControl('', []),
    price: new FormControl('', []),
    description: new FormControl('', []),
  });

  constructor(private productService: ProductService,
              private notificationService: NotificationService
          ) {
  }

  ngOnInit() {
  }

  createProduct() {
    this.productService.create(this.productForm.value).subscribe(
      () => {
        this.notificationService.showSuccessMessage("Success");
      },
      (error) => {
        this.notificationService.showErrorMessage("Error");
      }
    );
  }
}
