import { Component, OnInit, Input } from "@angular/core";
import { ControlBase } from "src/app/Functions/controls";
import { ControlService } from "src/app/Services/control.service";

@Component({
	selector: 'spinner-control',
	template: `
	<div>
		<label class="form-label"> spinner </label>
		<br>
	<div class="spinner-border text-info" role="status">
     <span class="visually-hidden">Loading...</span>
</div>
</div>
`})

export class SpinnerComponent implements OnInit {
	@Input() _control: ControlBase;

	constructor(public controlService: ControlService) { }
	ngOnInit(): void {
		throw new Error('Method not implemented.');
	}


}

