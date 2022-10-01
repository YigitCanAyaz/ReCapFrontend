import { UserForInfoDetail } from './../models/details/userForInfoDetail';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFilterPipe'
})
export class UserFilterPipePipe implements PipeTransform {

  transform(value: UserForInfoDetail[], filterText: string): UserForInfoDetail[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";
    return filterText ? value.filter((user: UserForInfoDetail) => user.firstName.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}
