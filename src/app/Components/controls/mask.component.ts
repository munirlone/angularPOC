import { Component, OnInit, Input } from "@angular/core";
import { ControlBase } from "src/app/Functions/controls";
import { ControlService } from "src/app/Services/control.service";


@Component({
	selector: 'mask-control',
	template: `<div> 
	<label class="form-label"> {{ _control.label }} </label>
              <input type = "text" class="form-control" mask='(000) 000-0000'
               id = "number_{{ _control.id }}"
               name = "number_{{ _control.id }}" />
	</div>`


})

export class MaskComponent implements OnInit {

	@Input() _control: ControlBase;
	constructor(public controlService: ControlService) { }

	ngOnInit() {

	}
}

