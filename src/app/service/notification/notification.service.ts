import { Injectable } from '@angular/core';

declare var Swal: any;

@Injectable({
  providedIn: 'root'
})

export class NotificationService {

  showSuccessMessage(message: string){
    Swal.fire({
      title: 'Success!',
      text: message,
      icon: 'sucess',
      confirmButtonText: 'OK'
    })
  }

  showErrorMessage(message: string){
    Swal.fire({
      title: 'Error!',
      text: message,
      icon: 'error',
      confirmButtonText: 'OK'
    })
  }



  constructor() { }
}
