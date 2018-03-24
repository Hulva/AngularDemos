import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'myImagePipe'
})
export class MyImagePipePipe implements PipeTransform {

  transform(value: string, fallback: string, args ? : any): any {
    let image = ""; 
    if (value) { 
      image = value; 
    } else { 
      image = fallback; 
    } 
    return image;
  }

}
