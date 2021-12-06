import { Component, OnInit, Input } from "@angular/core";
import { ControlBase } from "src/app/Functions/controls";
import { ControlService } from "src/app/Services/control.service";

@Component({
	selector: 'time-control',
	template: `<div> 
		<label class="form-label"> {{ _control.label }} </label>
              <input type="time" class="form-control" 
               id = "time_{{ _control.id }}"
               name = "time_{{ _control.id }}"  autocomplete="turnOff" /> </div>  `
})

export class TimeComponent implements OnInit {

	@Input() _control: ControlBase;
	constructor(public controlService: ControlService) { }

	ngOnInit() {
	}
}

