import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/details/carDetail';

@Pipe({
  name: 'carDetailFilterPipe'
})
export class CarDetailFilterPipePipe implements PipeTransform {

  transform(value: CarDetail[], filterText: string): CarDetail[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";
    return filterText ? value.filter((carDetail: CarDetail) => carDetail.modelName.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}
