import { Component, Input } from "@angular/core";
import { ControlBase } from "src/app/Functions/controls";
import { ControlService } from "src/app/Services/control.service";


@Component({
  selector: "numberbox-control",
  template: `<div>
		<label class="form-label" > {{ _control.label }} </label>
              <input type = "number" class="form-control"
               id = "number_{{ _control.id }}"
               name = "number_{{ _control.id }}" />
	</div>`,
})
export class NumberBoxComponent {
  @Input() _control: ControlBase;

  constructor(public controlService: ControlService) { }


}
