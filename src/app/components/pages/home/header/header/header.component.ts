import { AfterViewChecked, AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder, FormControl, FormGroup, Validators,
AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

import { Subject, takeUntil } from 'rxjs';
import {destinazione} from '@models/interfDestinazione'
import {GetDestinationService} from '@services'
import {RoutesmanagerserviceService} from '@services'

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { IParametertype } from '@models/interfParameters';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent
  implements OnInit, OnDestroy, AfterViewInit, AfterViewChecked
{
  @ViewChild('PartoDaQui')
  _PartoDaQui!: ElementRef;

  constructor(private router: Router) {} // private fb: FormBuilder //  private serviceDestinazion: GetDestinationService

  serviceDestinazione = inject(GetDestinationService);
  fb = inject(FormBuilder);
  routesmanager = inject(RoutesmanagerserviceService);

  today = this.dataOdierna();
  unsubscribe$: Subject<void> = new Subject<void>();
  destinazioni: destinazione[] = this.serviceDestinazione.getDestinazioni();
  arrivi = [...this.destinazioni];
  minRitorno = this.dataOdierna();
 bookingFormGroup!:FormGroup
  gino= this.bookingFormGroup = this.fb.group({
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
        validators: [Validators.required, this.DateValidator()],
        // Validators.min(minDate)]
      }),
      arrivo: new FormControl<Date | null>(null, {
        validators: [Validators.required],
      }),
    });

  get partenza() {
    return this.bookingFormGroup.controls['partenza'];
  }
sub = this.bookingFormGroup
      .get('da')
      ?.valueChanges.pipe(takeUntil(this.unsubscribe$))
  .subscribe((value) => {

        this.arrivi = this.destinazioni.filter((a) => a.id != value.id);
      });

     temsub = this.bookingFormGroup
      .get('partenza')
      ?.valueChanges.pipe(takeUntil(this.unsubscribe$))
      .subscribe((value) => {
        this.minRitorno = value;
        if (this.bookingFormGroup.value.arrivo < value) {
          this.bookingFormGroup.get('arrivo')?.reset();
        }
      });

  dataOdierna(): string {
    return new Date().toISOString().slice(0, 10);
  }

  ngAfterViewInit(): void {

  }
  ngAfterViewChecked(): void {

  }
  ngOnInit(): void {

  }

  onSubmit(): void {
    // console.log(this.bookingFormGroup.value.a);
    // console.log(this.bookingFormGroup.value.da);
    //  console.log(typeof this.bookingFormGroup.value.partenza);
    // console.log(this.bookingFormGroup.value.arrivo);
    let _tmpParemeters: IParametertype = {
      da: this.bookingFormGroup.value.da,
      a: this.bookingFormGroup.value.a,
      dal: new Date(this.bookingFormGroup.value.partenza),
      al: new Date(this.bookingFormGroup.value.arrivo)
    };
    this.routesmanager.setparameters(
      _tmpParemeters
    );
    let Routes = this.routesmanager.searchRoutes(
      _tmpParemeters
    );

       this.router.navigate(['results']);
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

      const nuovadata = new Date(value);
      const oggi = new Date();
      const risultato =
        nuovadata.getTime() >=
        new Date(oggi.getFullYear(), oggi.getMonth(), oggi.getDate()).getTime();
      if (!risultato) {
        control.reset();
      }

      return risultato ? { DataValidazione: true } : null;
    };
  }
}


