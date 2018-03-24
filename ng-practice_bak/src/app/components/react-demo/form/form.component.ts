import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  comment = new FormControl('', Validators.required);
  name = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]);
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      'comment': this.comment,
      'name': this.name,
      'email': this.email
    });
    this.form.valueChanges
    // .filter(data => this.form.valid)
      .map(data => {
        data.comment = data.comment.replace(/<(?:.|\n)*?>/gm, '');
        return data
      }).map(data => {
        data.lastUpdateTS = new Date();
        return data
      }).subscribe(data => console.log(JSON.stringify(data)));

  }

  /* None Observable Solution */
    // constructor(fb: FormBuilder) {
    //   this.form = fb.group({
    //     "comment": this.comment,
    //     "name": this.name,
    //     "email": this.email
    //   });
    //   this.form.valueChanges
    //       .subscribe( data => {
    //         if (this.form.valid) {
    //           data.comment = data.comment.replace(/<(?:.|\n)*?>/gm, '');
    //           data.lastUpdateTS = new Date();
    //           console.log(JSON.stringify(data))
    //         }
    //       });
    // }

  onSubmit() {
    console.log('Submitted!');
  }


  ngOnInit() {}

}
