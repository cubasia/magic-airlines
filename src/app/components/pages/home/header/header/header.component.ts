import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder, FormControl, FormGroup, Validators,
AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import { DefaultTitleStrategy } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';


interface destinazione {
  id: string;
  descrizione: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(private fb: FormBuilder) {}
  unsubscribe$: Subject<void> = new Subject<void>();
  destinazioni: destinazione[] = [
    { id: '1', descrizione: 'United States' },
    { id: '2', descrizione: 'Australia' },
    { id: '3', descrizione: 'Canada' },
    { id: '4', descrizione: 'Brazil' },
    { id: '5', descrizione: 'England' },
  ];
  arrivi = [...this.destinazioni];

  bookingFormGroup!: FormGroup;

  get partenza() {
    return this.bookingFormGroup.controls['partenza'];
  }

  ngOnInit(): void {
    this.bookingFormGroup = this.fb.group({
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
        validators: [Validators.required,this.DateValidator()],
      }),
      arrivo: new FormControl<Date | null>(null, {
        validators: [Validators.required],
      }),
    });

    let sub = this.bookingFormGroup
      .get('da')
      ?.valueChanges.pipe(takeUntil(this.unsubscribe$))
      .subscribe((value) => {
        this.arrivi = this.destinazioni.filter((a) => a.id != value);
      });
  }

  onSubmit(): void {
    console.log(this.bookingFormGroup.value.a);
    console.log(this.bookingFormGroup.value.da);
    console.log(this.bookingFormGroup.value.partenza);
    console.log(this.bookingFormGroup.value.arrivo);
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  DateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value as string;

      if (!value) {
        return null;
      }

     const nuovadata = new Date(value)
      const oggi= new Date()
      const risultato = nuovadata.getTime() >=
        new Date(oggi.getFullYear(), oggi.getMonth(), oggi.getDate()).getTime();
      if (!risultato) {control.reset()}

      return risultato ? { DataValidazione: true } : null;
    };
  }
}


