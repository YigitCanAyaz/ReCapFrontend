import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/details/carDetail';

@Pipe({
  name: 'carDetailDescriptionFilterPipe'
})
export class CarDetailDescriptionFilterPipePipe implements PipeTransform {

  transform(value: string): string {
    return value.substring(0, 20) + "...";
  }

}
