import { AfterViewChecked, AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder, FormControl, FormGroup, Validators,
AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

import { Subject, takeUntil } from 'rxjs';
import {destinazione} from '@models/interfDestinazione'
import {GetDestinationService} from '@services'
import {RoutesmanagerserviceService} from '@services'

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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
    //   this._PartoDaQui.nativeElement.focus()
    //  this._PartoDaQui.nativeElement.click();
    // var event = new MouseEvent('MouseDown', {
    //   view: window,
    //   bubbles: true,
    //   cancelable: true,
    // });
    // // //  this._PartoDaQui.nativeElement.size = 20;
    // // this._PartoDaQui.nativeElement.dispatchEvent(event);
    // // setTimeout(() => this._PartoDaQui.nativeElement.focus(), 4000);
    // // setTimeout(() => this._PartoDaQui.nativeElement.click(), 4000);
    // setTimeout(() => this._PartoDaQui.nativeElement.dispatchEvent(event), 4000);
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
    this.routesmanager.setparameters(
      this.bookingFormGroup.value.da,
      this.bookingFormGroup.value.a,
      new Date(this.bookingFormGroup.value.partenza),
      new Date(this.bookingFormGroup.value.arrivo)

    );
    let Routes = this.routesmanager.searchRoutes(
      this.bookingFormGroup.value.da,
      this.bookingFormGroup.value.a,
      new Date(this.bookingFormGroup.value.partenza),
      new Date(this.bookingFormGroup.value.arrivo)
    );

    this.routesmanager.setResults(Routes);
    this.router.navigate(['results']);
  }
  ngOnDestroy() {
    // this.unsubscribe$.next();
    // this.unsubscribe$.complete();
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


