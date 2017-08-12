import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'clean'
})
export class CleanPipePipe implements PipeTransform {

  transform(value: string, fallback: string, args ? : any): any {
    console.log(value);
    console.log(fallback);
    
    let badWords = fallback.split(',');
    badWords.forEach((v, i) => {
      console.log(v);
      
      console.log(value.indexOf(v));
      
      if (value.indexOf(v) != -1) {
        value.replace(/v/, '$%#@!');
        console.log(value);
        
      }
    });
    return value + '123';
  }

}
