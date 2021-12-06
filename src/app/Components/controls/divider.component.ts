import { Component, Input } from "@angular/core";
import { ControlBase } from "src/app/Functions/controls";
import { ControlService } from "src/app/Services/control.service";


@Component({
	selector: 'divider-control',
	template: `<div>
				 <div  id="divider_{{ _control.id }}" class=" text-center" >
				 <hr  class ='hr-default'>
				</div>
			</div>`

})

export class DividerComponent {
	@Input() _control: ControlBase;
	constructor(public controlService: ControlService) { }

}
