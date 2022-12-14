import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/entities/brand';

@Pipe({
  name: 'brandFilterPipe'
})
export class BrandFilterPipePipe implements PipeTransform {

  transform(value: Brand[], filterText: string): Brand[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";
    return filterText ? value.filter((brand: Brand) => brand.name.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}
