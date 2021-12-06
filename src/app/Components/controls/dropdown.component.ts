import { Component, Input } from "@angular/core";
import { ControlBase } from "src/app/Functions/controls";
import { ControlService } from "src/app/Services/control.service";

@Component({
  selector: "dropdown-control",
  template: `<div>
  <label class="form-label" > {{ _control.label }} </label>
  <select class="form-select">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
</div>`,
})
export class DropDownComponent {
  @Input() _control: ControlBase;

  constructor(public controlService: ControlService) {
  }

}
