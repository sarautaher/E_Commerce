
import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../Module/product';


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
