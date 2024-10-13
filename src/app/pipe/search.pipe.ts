import { Product } from './../Module/cart';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(products: Product[] | null, term: string): Product[] {
    if (!products) return []; 
    if (!term) return products; 

    return products.filter(product => 
      product.title.toLowerCase().includes(term.toLowerCase())
    );
  }

}
