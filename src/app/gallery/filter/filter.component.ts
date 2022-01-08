import { DatePipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output("dateEmitter") dateEmitter = new EventEmitter();
  dateControl = new FormControl("", [Validators.required]);
  constructor(public datepipe: DatePipe) { 
  }

  ngOnInit(): void {
    const today = new Date();
    
    this.dateControl.valueChanges.subscribe((value: any) => {
      console.log(this.datepipe.transform(value, 'yyyy-MM-dd'));
      this.dateEmitter.emit(this.datepipe.transform(value, 'yyyy-MM-dd'));
    })
    this.dateControl.setValue(new Date());
  }

}
