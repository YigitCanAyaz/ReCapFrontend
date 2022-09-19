import { Pipe, PipeTransform } from '@angular/core';
import { Model } from '../models/entities/model';

@Pipe({
  name: 'modelFilterPipe'
})
export class ModelFilterPipePipe implements PipeTransform {

  transform(value: Model[], filterText: string): Model[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";
    return filterText ? value.filter((model: Model) => model.name.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}
