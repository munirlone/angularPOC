import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.css']
})
export class WellComponent implements OnInit, OnChanges {
  @Input() wellInfo: any;
  wellForm: FormGroup;
  @Output() $AddWellList = new EventEmitter();

  sourceKeyList = ["Key001", "Key002", "Key003"]

  constructor(private router: Router) {
  }
  ngOnChanges(changes: SimpleChanges): void {

    if (this.wellInfo && this.wellForm)
      this.wellForm.patchValue(this.wellInfo)
  }

  ngOnInit() {
    this.wellForm = new FormGroup({
      'id': new FormControl(null),
      'name': new FormControl(null, Validators.required),
      'type': new FormControl(null, Validators.required),
      'sourceKey': new FormControl(null, Validators.required),
    });

    if (this.wellInfo && this.wellForm)
      this.wellForm.patchValue(this.wellInfo)
  }


  onSubmit() {
    this.$AddWellList.emit(this.wellForm.value);
    this.router.navigate(['/well/list']);
  }


}
