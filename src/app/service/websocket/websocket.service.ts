import {Injectable} from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {Product} from '../../model/product';
import {ProductService} from '../product/product.service';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  stompClient: any;

  constructor() {
  }


  disconnect() {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }
  }
}
