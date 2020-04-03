import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'InvadersFilter'
})
export class InvadersPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (!value) {
      return null;
    }
    if (!args) {
      return null;
    }
    if (args.length < 2) {
      return null;
    }

    args = args.toLowerCase();

    return value.filter(function(item){
        return JSON.stringify(item).toLowerCase().includes(args);
    });
}

}
