import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { PrimeService } from '../services/prime.service';
import { PrimeResponse} from '../models/prime-response';


@Component({
  selector: 'app-prime-main',
  templateUrl: './prime-main.component.html',
  styleUrls: ['./prime-main.component.scss']
})
export class PrimeMainComponent implements OnInit {

  primeResult: number[]=[];
  primeResponse!: PrimeResponse;
  constructor(private fb: FormBuilder,
    private primeService: PrimeService) {}

  ngOnInit(): void {}

  primeForm = this.fb.group({
    maxPrimeNumber: ['',[Validators.required,Validators.min(1),Validators.max(100)]]
  });


  generatePrime() :void {
    if (this.validateForm()) {
      let inputValue = this.fc.maxPrimeNumber.value;
      this.primeService.getPrimeNumbers(inputValue).subscribe(response => {
        this.primeResponse = response;
        this.primeResult = response.primeNumbers;
        console.log(response);
      }, error => {
        console.log(error);
      })
    } else {
      this.primeResponse = new PrimeResponse();
      this.primeResult=[];
    }
  }

  onCancel():void {
    this.resetForm();
  }

  private resetForm():void{
    this.f.reset();
    this.resetComponentObject();
  }

  private resetComponentObject():void{
    this.primeResponse = new PrimeResponse();
    this.primeResult=[];
  }

  private validateForm(): boolean {
    if (!this.f.valid) {
      Object.keys(this.fc).forEach(key => {
        this.fc[key].markAsDirty();
      });
    }
    return this.f.valid;
  }

  get f() { return this.primeForm; }
  get fc() { return this.primeForm.controls; }

}
