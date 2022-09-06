import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  bookingFormGroup = this.fb.group({
    da: [
      '',
      {
        validators: [Validators.required],
      },
    ],
    a: [
      '',
      {
        validators: [Validators.required],
      },
    ],
    partenza: new FormControl<Date | null>(null, {
      validators: [Validators.required],
    }),
    arrivo: new FormControl<Date | null>(null, {
      validators: [Validators.required],
    }),
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  onSubmit(): void {
    // this.bookingFormGroup.value;
  }
}
