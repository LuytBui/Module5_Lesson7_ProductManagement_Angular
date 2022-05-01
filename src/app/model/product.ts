import {Category} from './category';

export interface Product {
  id?: number;
  model?: string;
  producer?: string;
  price?: number;
  description?: string;
  category?: Category;
  image?: string;
}
